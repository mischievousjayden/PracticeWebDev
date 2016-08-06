var todosjson = [
    { 
        "description" : "Get groceries",
        "tags"  : [ "shopping", "chores" ]
    },
    { 
        "description" : "Make up some new ToDos",
        "tags"  : [ "writing", "work" ]
    },
    {
        "description" : "Prep for Monday's class",
        "tags"  : [ "work", "teaching" ]
    },
    { 
        "description" : "Answer emails",
        "tags"  : [ "work" ]
    },
    { 
        "description" : "Take Gracie to the park",
        "tags"  : [ "chores", "pets" ]
    },
    { 
        "description" : "Finish writing this book",
        "tags"  : [ "writing", "work" ]
    }
];

var getToDos = function(toDoObjects) {
    var toDos = toDoObjects.map(function(toDo) {
        return toDo.description;
    });

    return toDos;
}

var getOrganizedByTag = function(toDoObjects) {
    var organizedByTag = [];
    toDoObjects.forEach(function(toDo) {
        toDo.tags.forEach(function(tag) {
            var flag = true;
            organizedByTag.forEach(function(element) {
                if(element.name === tag) {
                    element.toDos.push(toDo.description);
                    flag = false;
                }
            });
            if(flag) {
                organizedByTag.push({"name":tag,"toDos":[toDo.description]});
            }
        });
    });

    return organizedByTag;
}

var main = function(toDoObjects) {
    "use strict";

    $(".tabs a span").toArray().forEach(function(element) {
        var $element = $(element);

        $element.on("click", function() {
            var $content;
            
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if($element.parent().is(":nth-child(1)")) {
                var toDos = getToDos(toDoObjects);

                var i;
                $content = $("<ul>");
                for(i=toDos.length-1; i>=0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            }
            else if($element.parent().is(":nth-child(2)")) {
                var toDos = getToDos(toDoObjects);
                
                $content = $("<ul>");
                toDos.forEach(function(todo) {
                    $content.append($("<li>").text(todo));
                });
            }
            else if($element.parent().is(":nth-child(3)")) {
                var organizedByTag = getOrganizedByTag(toDoObjects);

                $content = $("<div>");
                organizedByTag.forEach(function(tag) {
                    var $tagName = $("<h3>").text(tag.name);
                    var $ul = $("<ul>");
                    tag.toDos.forEach(function(description) {
                        $ul.append($("<li>").text(description));
                    });
                    $content.append($tagName).append($ul);
                });
            }
            else if($element.parent().is(":nth-child(4)")) {
                var $input = $("<input>").addClass("description");
                var $inputLabel = $("<p>").text("Description: ");
                var $tagInput = $("<input>").addClass("tags");
                var $tagLabel = $("<p>").text("Tags: ");
                var $button = $("<button>").text("+");
                $button.on("click", function() {
                    if($input.val() !== "" && $tagInput.val() !== "") {
                        toDoObjects.push({
                            "description":$input.val(),
                            "tags":$tagInput.val().split(",")
                        });
                        $input.val("");
                        $tagInput.val("");
                    }
                });

                $content = $("<div>").append($inputLabel).append($input)
                                    .append($tagLabel).append($tagInput)
                                    .append($button);
            }

            $("main .content").append($content);

            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
}

$(document).ready(function() {
    main(todosjson);
});


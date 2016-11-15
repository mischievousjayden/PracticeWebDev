import React from "react";

export default class TodoListCard extends React.Component {
    render () {
        return(
            <main class="mdl-layout__content">
                <div class="mdl-card mdl-cell mdl-cell--6-col mdl-cell--3-offset mdl-shadow--2dp">
                    <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
                        <h2 class="mdl-card__title-text">Todo List</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        <ui>
                            <li>hello</li>
                            <li>world</li>
                        </ui>
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">All</button>
                        <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Activate</button>
                        <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Complete</button>
                    </div>
                </div>
            </main>            
        );
    }
}


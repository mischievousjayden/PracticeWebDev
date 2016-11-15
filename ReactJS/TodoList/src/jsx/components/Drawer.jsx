import React from "react";

export default class Drawer extends React.Component {
    render () {
        return(
            <div class="mdl-layout__drawer">
                <span class="mdl-layout-title">{this.props.title}</span>
                <nav class="mdl-navigation">
                    {this.props.list.map(function(link) {
                        return <a class="mdl-navigation__link" href="">{link}</a>
                    })}
                </nav>
            </div>
        );
    }
}


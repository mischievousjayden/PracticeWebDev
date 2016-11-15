import React from "react";

export default class Header extends React.Component {
    render () {
        return(
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                    <span class="mdl-layout-title">{this.props.title}</span>
                    <div class="mdl-layout-spacer"></div>
                    <nav class="mdl-navigation mdl-layout--large-screen-only">
                        {this.props.list.map(function(link) {
                            return <a class="mdl-navigation__link" href="">{link}</a>;
                        })}
                    </nav>
                </div>
            </header>
        );
    }
}


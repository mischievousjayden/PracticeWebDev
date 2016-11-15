import React from "react";

export default class Header extends React.Component {
    render () {
        var links = ["All", "Active", "Inactive"];
        var drawers = ["Todo1", "Todo2", "Todo3", "Todo4", "Todo5"];
        return(
			<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
				<header class="mdl-layout__header">
					<div class="mdl-layout__header-row">
						<span class="mdl-layout-title">Todo List</span>
						<div class="mdl-layout-spacer"></div>
						<nav class="mdl-navigation mdl-layout--large-screen-only">
                            {links.map(function(link) {
                                return <a class="mdl-navigation__link" href="">{link}</a>;
                            })}
						</nav>
					</div>
				</header>
				<div class="mdl-layout__drawer">
					<span class="mdl-layout-title">List</span>
					<nav class="mdl-navigation">
                        {drawers.map(function(link) {
                            return <a class="mdl-navigation__link" href="">{link}</a>
                        })}
					</nav>
				</div>
			</div> 
        );
    }
}


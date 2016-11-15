import React from "react";

import Header from "./Header.jsx";
import Drawer from "./Drawer.jsx";
import TodoListCard from "./TodoListCard.jsx";
import Footer from "./Footer.jsx";

export default class Layout extends React.Component {
    render () {
		var header_title = "React & Material Design Todo List";
		var header_list = ["All", "Active", "Inactive"];

        var drawer_title = "List";
        var drawer_list = ["Todo1", "Todo2", "Todo3", "Todo4", "Todo5", "Todo6", "Todo7"];
        return(
			<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header title={header_title} list={header_list}/>
                <Drawer title={drawer_title} list={drawer_list}/>
                <TodoListCard />
                <Footer />
            </div>
        );
    }
}


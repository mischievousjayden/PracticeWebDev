import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Todo_Page from "./pages/Todo_Page.jsx";

var header_title = "React & Material Design Todo List";
var drawer_title = "List";
var app = document.getElementById("app");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" header_title={header_title} drawer_title={drawer_title} component={Todo_Page} />
        <Route path="/:list_name" header_title={header_title} drawer_title={drawer_title} component={Todo_Page} />
    </Router>,

app);


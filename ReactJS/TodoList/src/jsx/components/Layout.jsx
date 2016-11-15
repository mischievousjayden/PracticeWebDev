import React from "react";

import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

export default class Layout extends React.Component {
    render () {
        return(
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}


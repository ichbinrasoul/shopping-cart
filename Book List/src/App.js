import React, { Component } from "react";

import Header from "./Components/Header";
import AddForm from "./Components/AddForm";

export default class App extends Component {

    render() {
        return (
            <div>
                <ul>
                    <Header />
                    <AddForm />
                </ul>
            </div>
        );
    }
}

import React, { Component } from "react";
import './Header.css'
import { FaBookOpen } from "react-icons/fa";

export default class Header extends Component {
    render() {
        return (
            <div className="navbar">
                <h1><FaBookOpen className="icon" />Welcome to Yola Zulva <span>Book</span> Shop</h1>
            </div>
        );
    }
}

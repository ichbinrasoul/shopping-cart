import React, { Component } from "react";

import Book from "./Book";

import "./AddForm.css";

export default class AddForm extends Component {
    constructor() {
        super();

        this.state = {
            books: [],

            title: "",
            author: "",
            year: "",
        };
        this.titleHandler = this.titleHandler.bind(this)
        this.authorHandler = this.authorHandler.bind(this)
        this.yearHandler = this.yearHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler (event) {
        event.preventDefault()

        let {title, author, year} = this.state
        if (title && author && year) {
            let newBook = {
                id: this.state.books.length + 1,
                title,
                author,
                year
            }
            this.setState({
                books: [...this.state.books, newBook]
            })

            this.setState({
                title: '',
                author: '',
                year: '',
            })
        }
    }

    titleHandler (event) {
        this.setState({
            title: event.target.value
        })
    }

    authorHandler (event) {
        this.setState({
            author: event.target.value
        })
    }   

    yearHandler (event) {
        this.setState({
            year: event.target.value
        })
    }

    render() {
        return (
            <>
                <div className="container">
                    <form action="" onSubmit={this.submitHandler}>
                        <div className="title">
                            <label htmlFor="">Title</label>
                            <input type="text" value={this.state.title} onChange={this.titleHandler} />
                        </div>

                        <div className="author">
                            <label htmlFor="">Author</label>
                            <input type="text" value={this.state.author} onChange={this.authorHandler} />
                        </div>

                        <div className="year">
                            <label htmlFor="">Year</label>
                            <input type="text" value={this.state.year} onChange={this.yearHandler} />
                        </div>
                        <button>Add Book</button>
                    </form>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.books.map(book => (
                            <Book key={ book.id } {...book} />
                        ))}
                    </tbody>
                </table>
            </>
        );
    }
}

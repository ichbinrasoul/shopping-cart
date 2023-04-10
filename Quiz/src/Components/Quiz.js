import React, { Component } from 'react';

import './Quiz.css'

class Quiz extends Component {

    constructor (props) {
        super (props)

        this.state = {
            questions: [
                {
                    questionText: 'where is Cpital of Indonesia?',
                    questionOptions: [
                        {answerText: 'Jakarta', isCorrect: true},
                        {answerText: 'New York', isCorrect: false},
                        {answerText: 'Kuala lupor', isCorrect: false},
                        {answerText: 'Berlin', isCorrect: false}
                    ]
                },
                {
                    questionText: 'where is Cpital of Thailand?',
                    questionOptions: [
                        {answerText: 'Singapor', isCorrect: false},
                        {answerText: 'Bangkok', isCorrect: true},
                        {answerText: 'London', isCorrect: false},
                        {answerText: 'Paris', isCorrect: false}
                    ]
                }
            ],
            currentQuestion: 0,
            showScore: false,
            score: 0,
        }

    }
    
    clickHandler (isCorrect) {

        if (isCorrect) {
            this.setState( prevState => {
                return {
                    score: prevState.score + 1
                }
            })
        }
        
        if (this.state.currentQuestion === this.state.questions.length - 1) {
            this.setState({showScore: true})
        } else {
            this.setState(prevState => {
                return {
                    currentQuestion: prevState.currentQuestion + 1
                }
            })
        }
    }

    render() { 
        return (
            <section>

                {this.state.showScore ? (
                    <h1>you scored {this.state.score} out of {this.state.questions.length}</h1>
                ) : (
                    <>
                        <h2>Question <span>{this.state.currentQuestion + 1} </span>/ {this.state.questions.length}</h2>
                        <div>
                            <h1>{this.state.questions[this.state.currentQuestion].questionText}</h1>
                        </div>
                        {this.state.questions[this.state.currentQuestion].questionOptions.map(answer => (
                            <button onClick={ this.clickHandler.bind(this, answer.isCorrect) } >{answer.answerText}</button>
                        ))}
                    </>
                )}
            </section>
        );
    }
}
 
export default Quiz;
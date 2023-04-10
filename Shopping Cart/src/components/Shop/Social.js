import React, { Component } from 'react'

export default class Social extends Component {

    render() {
        let {id, href, img} = this.props
        return (
            <li>
                <a href={href} target="_blank">
                    <img src={img} alt='utube' height={20} width={30}/>
                </a>
            </li>
        )
    }
};

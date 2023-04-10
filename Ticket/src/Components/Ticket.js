import React, { Component } from 'react';
import './Ticket.css'

class Ticket extends Component {

    constructor (props) {
        super (props)

        this.state = {
            countriesData: {
                Iran: ['Tehran', 'Tabriz', 'Shiraz', 'Isfahan'],
                Indonesia: ['Jakarta', 'Surabaya', 'Bandung', 'Pekanbaru'],
                USA: ['New York', 'Chicago', 'Los Angeles', 'Las Vegas'],
                Germany: ['Berlin', 'Hamburg', 'Munich', 'Dusseldorf']
            },
            mainCountriesCity: []
        }
        this.selectHandler = this.selectHandler.bind(this)
    }

    selectHandler (event) {
        let mainCountry = event.target.value

        if (mainCountry === '-1') {
            this.setState({
                mainCountriesCity: []
            })
        } else {
            let mainCountryCities = this.state.countriesData[mainCountry]
    
            this.setState({
                mainCountriesCity: mainCountryCities
            })
        }
    }

    render() { 
        return (

            <section>
                <table>
                    <tr>
                        <td>
                            <input placeholder='First Name' type="text" />
                            <input placeholder='Last Name' type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input placeholder='Phone Number' type="text" />
                            <input placeholder='Email' type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <select name="" id="" onChange={ this.selectHandler }>
                                <option value="-1">please select...</option>
                                <option value='Iran'>Iran</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="USA">USA</option>
                                <option value="Germany">Germany</option>
                            </select>
                            <select name="" id="">
                                {this.state.mainCountriesCity.length ? this.state.mainCountriesCity.map(city => (
                                    <option value={city}>{city}</option>
                                )) : (
                                    <option value='-1'>please select...</option>
                                )}
                            </select>
                        </td>
                    </tr>
                    <button>Book Ticket</button>
                </table>
            </section>
        );
    }
};
 
export default Ticket;
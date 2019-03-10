import React, { Component } from 'react'

import { API_URL, HEADERS } from "consts";

import {CountriesListItem} from "components/CountriesListItem";

export class Countries extends Component {
    state = {
       countries:[]
    };
    componentDidMount(){
        fetch(`${API_URL}/all`, {
            headers: HEADERS
        })
            .then((response) => response.json())
            .then(countries => {
                this.setState({
                    countries,
                });
            })

    }

    render(){
        console.log(this.state.countries);
        const {history} = this.props;
        return(

            <div>
                {this.state.countries.map(country=>(
                    <CountriesListItem
                        country={country}
                        key={country.name}
                        onClick={() => { history.push({
                            pathname:`/info/${country.name}`,
                            state: {country}
                        }) }}/>
                    )
                )}
            </div>


        )





    }



}
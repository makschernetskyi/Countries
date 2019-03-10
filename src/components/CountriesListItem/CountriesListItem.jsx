import React,{Component} from 'react'

import styles from './CountriesListItem.scss'


export class CountriesListItem extends Component{
    render(){
        const { country, onClick } = this.props;
        
        return(
            <div className={styles.countryListItem} onClick={onClick}>
                <p className={styles.title}>{country.name}({country.nativeName})</p>
                <p>capital:{country.capital}</p>
                <p>population:{country.population}</p>

            </div>
        )

    }
}
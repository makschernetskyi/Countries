import React,{Component} from 'react'

import styles from './Country.scss'


export class Country extends Component{
render(){

    console.log(this.props);
        const {country} = this.props.location.state;

    return(

        <div>
            <div className={styles.countryLocation}>{country.region}</div>
            <div className={styles.languages}>{country.languages}</div>
            <div className={styles.borders}>{country.borders}</div>
        </div>

    )



}



}

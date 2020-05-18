import React from 'react';

import {Header, Cards, Chart, CountrySelect } from './components';
import styles from './App.module.css';
import { fetchData } from './api';


class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({
            data: fetchedData
        });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
    

        this.setState({
            data: fetchedData,
            country: country,
        })
    }

    render() {
        const {data, country} = this.state;

        return (
            <div className={styles.container}>
                <Header />
                <Cards data = {data} />
                <CountrySelect handleCountryChange = {this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>

        )
    }
}

export default App;
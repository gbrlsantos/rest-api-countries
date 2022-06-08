import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Error from './Error';
import Loading from './Loading';
import Country from './Country';

const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setCountries(data);
                }
            )
            .catch(
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return(
            <Error />
        )
    } else if (!isLoaded) {
        return(
            <Loading />
        )
    }
    else {
        return(
            <ul>
                {countries.map(country => (
                    <Country 
                        id={country.cca2}
                        name={country.name.common}
                        population={country.population}
                        region={country.region}
                        capital={country.capital}
                    />
                ))}
            </ul>
        )
    }
}
export default Home;
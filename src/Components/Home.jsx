import React, { useState, useEffect } from 'react';
import Error from './Error';
import Loading from './Loading';

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
                },
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
                    <li key={country.id}>
                        {country.name.common}
                    </li>
                ))}
            </ul>
        )
    }
}
export default Home;
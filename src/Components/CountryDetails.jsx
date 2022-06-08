import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Error from './Error';
import Loading from './Loading';

const CountryDetails = () => {
    const { id } = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [countryDetails, setCountryDetails] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/alpha/" + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data)
                    setIsLoaded(true);
                    setCountryDetails(data[0]);
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
        console.log(error)

        return(
            <Error />
        )
    } else if (!isLoaded) {
        return(
            <Loading />
        )
    }
    else if (countryDetails) {
        return(
            <div key={id}>
                <div>
                    <h3>{countryDetails.name.common}</h3>
                    <p><span>Native name: </span></p>
                    <p><span>Population: </span>{countryDetails.population}</p>
                    <p><span>Region: </span>{countryDetails.region}</p>
                    <p><span>Subregion: </span>{countryDetails.subregion}</p>
                    <p><span>Capital: </span>{countryDetails.capital}</p>
                </div>
                <div>
                    <p><span>Top Level Domain: </span>{countryDetails.tld}</p>
                    <p><span>Currencies: </span></p>
                    <p><span>Languages: </span></p>
                </div>
            </div>
        )
    }
    else {
        console.log("Falha")
    }
}

export default CountryDetails;
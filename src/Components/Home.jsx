import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Error from './Error';
import Loading from './Loading';
import Country from './Country';
import SearchBar from './SearchBar';
import FilterSelect from './FilterSelect';

import { useSearch } from '../Context/Search';

/* styled components */
const CountriesList = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 60px;
    justify-content: center;
`

const FilterSection = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 20px;
`

const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [countries, setCountries] = useState([]);

    const { searchValue } = useSearch()

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
            <main>
                <FilterSection>
                    <SearchBar/>
                    <FilterSelect/>
                </FilterSection>
                <CountriesList>
                    {countries.filter((val)=> {
                        if (!searchValue || val.name.common.toLowerCase().includes(searchValue.toLowerCase())) 
                            return val
                        return null
                    }).map(country => (
                        <Country 
                            id={country.cca2}
                            name={country.name.common}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                            flag={country.flags.png}
                        />
                    ))}
                </CountriesList>
            </main>
        )
    }
}
export default Home;
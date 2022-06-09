import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Flag = styled.img`
    width: 300px;
    height: 200px;
`;

const Country = ({id, name, population, region, capital, flag}) => {
    return (
        <div key={id}>
            <Link to={`country/${id}`}>
                <Flag alt={name + " Flag"} src={flag}></Flag>
                <h3>{name}</h3>
            </Link>
            <p><span>Population: </span>{population}</p>
            <p><span>Region: </span>{region}</p>
            <p><span>Capital: </span>{capital}</p>
        </div>
    )
}

export default Country
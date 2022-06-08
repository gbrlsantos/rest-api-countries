import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({id, name, population, region, capital, flag}) => {
    return (
        <div key={id}>
            <img alt={name + " Flag"} src={flag}></img>
            <h3>
                <Link to={`country/${id}`}>{name}</Link>
            </h3>
            <p><span>Population: </span>{population}</p>
            <p><span>Region: </span>{region}</p>
            <p><span>Capital: </span>{capital}</p>
        </div>
    )
}

export default Country
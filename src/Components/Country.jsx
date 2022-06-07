import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({cca2, name, population, region, capital}) => {
    return (
        <div key={cca2}>
            <h3>
                <Link to={`country/${cca2}`} params={{'cca2': cca2}}>{name}</Link>
            </h3>
            <p><span>Population: </span>{population}</p>
            <p><span>Region: </span>{region}</p>
            <p><span>Capital: </span>{capital}</p>
        </div>
    )
}

export default Country
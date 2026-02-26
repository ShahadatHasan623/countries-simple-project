import React from 'react';

const Country = ({country}) => {
    console.log(country);
    const {name,flags,population,region}=country
    return (
        <div>
            <img src={flags.flags.png} alt={flags.flags.alt} />
            <h3>Name : {name.common}</h3>
            <p>Population : {population.population}</p>
            <p>Region : {region.region}</p>
        </div>
    );
};

export default Country;
import React, { use } from 'react';

const Countries = ({countriesPromise}) => {
    const countryData =use(countriesPromise)
    const countries = countryData.countries
    console.log(countries);
    return (
        <div>
            <h1>In the countries :{countries.length}</h1>
        </div>
    );
};

export default Countries;
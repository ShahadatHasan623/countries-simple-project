import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({countriesPromise}) => {
    const countryData =use(countriesPromise)
    const countries = countryData.countries
    return (
        <div>
            <h1>In the countries :{countries.length}</h1>
            {
                countries.map(country=><Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;
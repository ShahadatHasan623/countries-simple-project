import React, { use } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = ({ countriesPromise }) => {
  const countryData = use(countriesPromise);
  const countries = countryData.countries;
  return (
    <div>
      <h1>In the countries :{countries.length}</h1>
      <div className="gird-layout">
        {countries.map((country) => (
          <Country country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

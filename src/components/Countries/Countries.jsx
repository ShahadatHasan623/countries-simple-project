import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const countryData = use(countriesPromise);
  const countries = countryData.countries;

  const handlerVisitedCountries =(country)=>{
    console.log("visited countries",country);
  }
  return (
    <div>
      <h1>In the countries :{countries.length}</h1>
      <h3>Total Visited Countries :</h3>
      <div className="gird-layout">
        {countries.map((country) => (
          <Country 
          country={country}
          key={country.cca3.cca3}
          handlerVisitedCountries={handlerVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

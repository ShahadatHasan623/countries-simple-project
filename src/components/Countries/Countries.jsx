import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);
  const countryData = use(countriesPromise);
  const countries = countryData.countries;

  const handlerVisitedCountries = (country) => {
    const newVisited = [...visitedCountry, country];
    setVisitedCountry(newVisited);
  };

  const handleFlagVisit = (flags) => {
    const newVisited = [...visitedFlag, flags];
    setVisitedFlag(newVisited);
  };
  return (
    <div>
      <h1>In the countries :{countries.length}</h1>
      <h3>Total Visited Countries :{visitedCountry.length}</h3>
      <h3>Total Visited Flags :{visitedFlag.length}</h3>
      {visitedCountry.map((countries) => (
        <ol key={countries.cca3.cca3}>
          <li>{countries.name.common}</li>
        </ol>
      ))}
      <div className="gird-layout">
        {visitedFlag.map((flag) => (
          <div>
            <img src={flag} alt="" />
          </div>
        ))}
      </div>
      <div className="gird-layout">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3.cca3}
            handlerVisitedCountries={handlerVisitedCountries}
            handleFlagVisit={handleFlagVisit}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

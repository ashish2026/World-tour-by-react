import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log("add this to your visited country");
    // visitedCountry.push(country)

    const newVisitedCountries = [...visitedCountries, country]
// If there are previously visited countries, we need to copy all of them (...visitedCountries).
// Then, add the new country afterward, like: country. This is called the spread operator.
// In React, we can't use push directly. Instead, we need to create a new array, copy the existing items, and then add the new element.

    setVisitedCountries(newVisitedCountries)

  };
  const handleVisitedFlags = flag=>{
    const newVisitedFlags = [...visitedFlags, flag] 
    setVisitedFlags(newVisitedFlags)
  }

  return (
    <div>
      <h3>Countries : {countries.length}</h3>
      {/* visited flags */}
      <div>
        <h5>Visited Countries : {visitedCountries.length}</h5>
        <ul className="">
          {
            visitedCountries.map( country => <li style={{listStyle: 'none'}} key={country.name.cca2}>{country.name.common}</li>)
          }
        </ul>
      </div>
      <div className="flag-container">
        {
          visitedFlags.map((flag, idx )=> <img key={idx} src={flag}></img>)
        }

      </div>
            {/* display countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;

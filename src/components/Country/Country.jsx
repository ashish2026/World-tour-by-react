import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const { name, flags, population, area, cca2, capital } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };
  console.log(country)

  // console.log(handleVisitedCountry)
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>
        Name : {name?.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code : {cca2}</small>
      </p>
      <div>
      <p>Capital: {capital}</p>
      </div>
      <button
        className="custom-btn"
        onClick={() => handleVisitedFlags(country.flags.png)}
      >
        Add Flag
      </button>{" "}
      <br /> <br />
      <button onClick={handleVisited} className="custom-btn">
        {visited ? "Visited " : "Going"}
      </button>
      <span style={{margin: '15px'}}>
        <button className="custom-btn">
          {visited ? "I have visited this country" : "I want to visit"}
        </button>
      </span>
      <br />
      <br />
      <button
        onClick={() => handleVisitedCountry(country)}
        className="custom-btn"
      >
        Mark visited
      </button>
    </div>
  );
};

export default Country;

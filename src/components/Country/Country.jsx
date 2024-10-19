import  { useState } from "react";
import "./Country.css";

const Country = ({ country ,handleVisitedCountry, handleVisitedFlags}) => {
  const { name, flags, population, area ,cca2} = country;
  const [visited, setVisited] = useState(false)

const handleVisited =()=>{
  setVisited(!visited)
}
// console.log(country)

// console.log(handleVisitedCountry)
  return (
    <div className={`country ${visited? 'visited': 'non-visited'}`}>
      <h3 style={{color: visited? 'purple' : 'white'}}>Name : {name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p><small>Code : {cca2}</small></p>
      <button onClick={()=> handleVisitedFlags(country.flags.png)}>Add Flag</button> <br /> <br />
      <button onClick={handleVisited} style={{borderRadius: "8px", height:"35px", color: '', border: "none"}}>{visited? "Visited": "Going"}</button>
      {visited? "I have visited this country." : "I want to visit"}
      <br />
      <br />

      <button onClick={ ()=>handleVisitedCountry(country)} style={{borderRadius: "8px", height:"35px", color: '', border: "none"}}>Mark visited</button>
    </div>
  );
};

export default Country;

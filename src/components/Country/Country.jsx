import React, { useState } from 'react';

const Country = ({country}) => {
    const {name,flags,population,region,area}=country

    const [visited,setVisited]=useState(false)

    const handleVisited =()=>{
        if(visited){
            setVisited(false)
        }
        else{
            setVisited(true)
        }
    }
    return (
        <div className={`border ${visited && `visited-bg`}`} >
            <img src={flags.flags.png} alt={flags.flags.alt} />
            <h3>Name : {name.common}</h3>
            <p>Population : {population.population}</p>
            <p>Region : {region.region}</p>
            <p>Area :{area.area} {area.area > 500000 ? 'Big Country': 'Small Country'}</p>
            <button onClick={handleVisited}>{visited ? "visited" : "Not Visited"}</button>
        </div>
    );
};

export default Country;
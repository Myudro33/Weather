import React from "react";
import "../App.css";


const TopButtons = ({setQuery}) => {
  const cities = [
    {
      id: 1,
      title: "Batumi",
    },
    {
      id: 2,
      title: "Tbilisi",
    },
    {
      id: 3,
      title: "Gori",
    },
    {
      id: 4,
      title: "Lagodekhi",
    },
    {
      id: 5,
      title: "New York",
    },
  ];

  return (
    <div className='flex  items-center justify-around my-6'>
      {cities.map((city) => (
        <button className="text-white md:text-lg text-sm font-medium"  key={city.id} onClick={()=>setQuery({q: city.title})} >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;

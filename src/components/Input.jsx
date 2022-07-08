import React, { useState ,useRef} from "react";
import { BiSearchAlt } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { useKey } from "rooks";

const Input = ({setQuery,units,setUnits}) => {
  const [value,setValue] = useState('')
 const input = useRef()
  const valueChange = () =>{
    if(value!==''){
    setQuery({q:value})
    input.current.value=''
    }
  }

  useKey(['Enter'],valueChange)
const unitChangeHandler = (e) =>{
    const selectedUnit = e.currentTarget.name
    if(units!==selectedUnit){
      setUnits(selectedUnit)
    }
}

  const handleLocation = () =>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        setQuery({lat,lon})
      })
    }
  }
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row items-center justify-center space-x-4">
        <input
        ref={input}
        onChange={(e)=>setValue(e.target.value)}
          type="text"
          placeholder="search..."
          className="text-xl px-1 font-light w-full shadow-xl focus:outline-none capitalize placeholder:lowercase "
        />
        <BiSearchAlt
        onClick={valueChange}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          size={30}
        />
        <GoLocation
        onClick={handleLocation}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          size={20}
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          className="text-xl text-white font font-light transition ease-out hover:scale-125"
          name="metric"
          onClick={unitChangeHandler}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          className="text-xl text-white font font-light transition ease-out hover:scale-125"
          name="imperial"
          onClick={unitChangeHandler}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Input;

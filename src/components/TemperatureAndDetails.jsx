import React from "react";
import { TbTemperature } from "react-icons/tb";
import { RiWindyFill } from "react-icons/ri";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { BsSunset } from "react-icons/bs";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { formatToLocalTime, iconUrlFromCode } from "../service/weatherService";

const TemperatureAndDetails = ({weather:{
  details,icon,temp,temp_min, temp_max, sunrise,sunset,speed,humidity,feels_like,timezone
}}) => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          className="w-20"
          src={iconUrlFromCode(icon)}
          alt="type weather"
        />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <TbTemperature size={20} />
            Real feel:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <MdOutlineWaterDrop size={20} />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <RiWindyFill size={20} />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <FiSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">{formatToLocalTime(sunrise,timezone,'hh:mm a')}</span>
        </p>
        <p className="font-light">|</p>
        <BsSunset />
        <p className="font-light">
          Set: <span className="font-medium ml-1">{formatToLocalTime(sunset,timezone,'hh:mm a')}</span>
        </p>
        <p className="font-light">|</p>
        <FiArrowUp />
        <p className="font-light">
          High: {''}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>
        <FiArrowDown />
        <p className="font-light">
          Low: {''}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;

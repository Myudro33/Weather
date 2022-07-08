import React, { useEffect, useState } from "react";
import Forecast from "./components/Forecast";
import Input from "./components/Input";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import getFormattedWeatherData from "./service/weatherService";
import './App.css'

const App = () => {
  const [query, setQuery] = useState({ q: "Kvakhvreli" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query,units}).then((data) => {
        setWeather(data);
        console.log(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () =>{
    if(!weather) return 'from-cyan-400 to-blue-700'
    const treshold = units ==='metric'?20:60
    if(weather.temp<=treshold) return 'from-cyan-400 to-blue-700'

    return 'from-yellow-500 to-orange-700'
  }

  return (
    <div  className={`mx-auto max-w-screen-md h-full py-1 px-12 bg-gradient-to-br shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Input setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title={"hourly forecast"} items={weather.hourly} />
          <Forecast title={"daily forecast"} items={weather.daily}/>
        </div>
      )}
    </div>
  );
};

export default App;

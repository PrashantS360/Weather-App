import './App.css';
import React, { useState, useEffect } from 'react';
import { TiWeatherSunny } from 'react-icons/ti'
import { BsCloudHaze2Fill } from 'react-icons/bs'
import { FaCloudRain } from 'react-icons/fa'
import { AiOutlineCloud,AiFillCloud } from 'react-icons/ai'
import { WiHumidity, WiSunrise, WiSunset } from 'react-icons/wi'
import { SiWindicss } from 'react-icons/si'



function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  
  const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
  };

  const getCurrentTime = (now) => {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    // var now = new Date();
    var month = months[now.getMonth()];
    var date = now.getDate();

    let hours = now.getHours();
    let mins = now.getMinutes();

    let periods = "AM";

    if (hours > 11) {
      periods = "PM";
      if (hours > 12) hours -= 12;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }

    return `${month} ${date} | ${hours}:${mins} ${periods}`;
  };

  const [city, setCity] = useState("Ballia")
  const [state, setState] = useState("Up")
  const [country, setCountry] = useState("IN")
  const [weather, setWeather] = useState(
    {
      "coord": {
        "lon": 84.1503,
        "lat": 25.7557
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 35.88,
        "feels_like": 36.48,
        "temp_min": 35.88,
        "temp_max": 35.88,
        "pressure": 1005,
        "humidity": 32,
        "sea_level": 1005,
        "grnd_level": 997
      },
      "visibility": 10000,
      "wind": {
        "speed": 5.56,
        "deg": 87,
        "gust": 5.6
      },
      "clouds": {
        "all": 1
      },
      "dt": 1652067407,
      "sys": {
        "country": "IN",
        "sunrise": 1652053285,
        "sunset": 1652101099
      },
      "timezone": 19800,
      "id": 1277238,
      "name": "Ballia",
      "cod": 200
    });
  const getData = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=metric&appid=${API_KEY}`);
    const json = await response.json();
    setWeather(json);
  }

  useEffect(() => {
    getData();
    setCity("Allahabad");
    setCountry("IN");
    setState("UP");
    // eslint-disable-next-line
  }, [])

  
  const sunrise = new Date(weather.sys.sunrise * 1000);
  const sunset = new Date(weather.sys.sunset * 1000);
  const now = new Date();


  return (
    <div className="md:h-[95vh] w-[80vw] m-auto mt-[2.5vh] border-8 rounded-xl border-gray-700 ">
      <div className="flex justify-between flex-col md:flex-row space-y-5 App h-[70%] px-5 py-4 space-x-2">
        <div className="date text-white text-2xl"> {getCurrentDay()} <br /> {getCurrentTime(now)}</div>
        <div className="location text-white text-2xl">
          <div className="city">{city}</div>
          <div className="state">{state}</div>
          <div className="country">{country}</div>
        </div>
      </div>
      <div className="weatherdetails bg-white h-[30%] p-5 space-y-5 flex-col md:flex-row flex items-center">
        {weather.weather[0].main === "Sunny" && <div className=' flex flex-col items-center text-yellow-400 md:w-1/6'>
          <TiWeatherSunny className='text-[6.5rem] animate-pulse' />
          <span className='text-xl font-semibold'>{weather.weather[0].main}</span>
        </div>}
        {weather.weather[0].main === "Haze" && <div className=' flex flex-col items-center text-amber-600 md:w-1/6'>
          <BsCloudHaze2Fill className='text-[6.5rem] animate-pulse' />
          <span className='text-xl font-semibold'>{weather.weather[0].main}</span>
        </div>}
        {weather.weather[0].main === "Clear" && <div className=' flex flex-col items-center text-gray-200 md:w-1/6'>
          <AiOutlineCloud className='text-[6.5rem] animate-pulse' />
          <span className='text-xl font-semibold text-gray-700'>{weather.weather[0].main}</span>
        </div>}
        {weather.weather[0].main === "Rainy" && <div className=' flex flex-col items-center text-gray-100 md:w-1/6'>
          <FaCloudRain className='text-[6.5rem] animate-pulse' />
          <span className='text-xl font-semibold text-blue-500'>{weather.weather[0].main}</span>
        </div>}
        {weather.weather[0].main !== "Rainy" && weather.weather[0].main !== "Haze" && weather.weather[0].main !== "Sunny" && weather.weather[0].main !== "Clear" && <div className=' flex flex-col items-center text-gray-400 md:w-1/6'>
          <AiFillCloud className='text-[6.5rem] animate-pulse' />
          <span className='text-xl font-semibold text-blue-400'>{weather.weather[0].main}</span>
        </div>}

        <div className="temperature flex flex-col items-center md:w-2/6 space-y-4 ">
          <span className="currentTemp text-3xl"><b>{weather.main.temp}&deg;</b>C</span>
          <div className='flex space-x-5'>
            <span className="maxtemp text-xl"><b>{weather.main.temp_max}&deg;</b>C <br /> Max</span>
            <span className="mintemp text-xl"><b>{weather.main.temp_min}&deg;</b>C <br /> Min</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 md:w-3/6 ">
          <div className="humidity  text-center">
            <WiHumidity className='text-[3rem] m-auto text-blue-700' />
            <span className="humVal text-xl font-semibold"> {weather.main.humidity}%</span>
          </div>
          <div className="wind text-center">
            <SiWindicss className='text-[3rem] m-auto text-blue-400' />
            <span className="windspeed font-semibold text-xl">{weather.wind.speed}km/h</span>
          </div>
          <div className="sunrise text-center">
            <WiSunrise className='text-[3rem] m-auto text-orange-400' />
            <span className="sunriseTime font-semibold">{getCurrentTime(sunrise).split("|")[1]}</span>
          </div>
          <div className="sunset text-center">
            <WiSunset className='text-[3rem] m-auto text-orange-400' />
            <span className="sunsetTime font-semibold">{getCurrentTime(sunset).split("|")[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGLMap from './components/MapboxGLMap';
import Weather from './components/Weather';
import Navbar from './components/Navbar';

function App() {
  // const API_KEY = process.env.REACT_APP_API_KEY;

  const API_KEY = "629fa4d664b2b4cf442f1a359f128527";

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


  const initialLocation = { city: "Allahabad", state: "Up", country: "In" };
  const [location, setLocation] = useState(initialLocation)
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
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location.city}&units=metric&appid=${API_KEY}`);
    const json = await response.json();
    if (json.cod === 200) {
      setWeather(json);
    }

    toast(`Location is set to ${location.city}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });


  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line 
  }, [])


  const sunrise = new Date(weather.sys.sunrise * 1000);
  const sunset = new Date(weather.sys.sunset * 1000);

  const onChange = (e) => {
    setLocation({ ...location, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Navbar onChange={onChange} getData={getData} location={location}/>
      <div className="flex flex-col lg:flex-row ">
        <div className=" lg:w-1/3 border-4 border-gray-700 ">
          <ToastContainer />
          <Weather weather={weather} getCurrentDay={getCurrentDay} getCurrentTime={getCurrentTime} onChange={onChange} sunrise={sunrise} sunset={sunset} location={location} />
        </div>
        <div className="lg:w-2/3">
          <MapboxGLMap lon={weather.coord.lon} lat={weather.coord.lat} />
        </div>
      </div>
    </>
  );
}

export default App;

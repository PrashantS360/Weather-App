import React from 'react'
import { TiWeatherSunny } from 'react-icons/ti'
import { BsCloudHaze2Fill } from 'react-icons/bs'
import { FaCloudRain } from 'react-icons/fa'
import { AiOutlineCloud, AiFillCloud } from 'react-icons/ai'
import { WiHumidity, WiSunrise, WiSunset } from 'react-icons/wi'
import { SiWindicss } from 'react-icons/si'

const Weather = ({ getCurrentDay, getCurrentTime, weather, sunrise, sunset }) => {


    const now = new Date();

    return (
        <div>
            <div className="flex justify-between flex-col md:flex-row space-y-5 datebg px-5 py-4 space-x-2 h-[28.5vh]">
                <div className="date text-white text-2xl"> {getCurrentDay()} <br /> {getCurrentTime(now)}</div>

            </div>
            <div className="weatherdetails p-5 space-y-5 flex-col flex items-center justify-end bg-blue-400 text-white">
                <div className='flex justify-center'>
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
                        <span className='text-xl font-semibold text-blue-900'>{weather.weather[0].main}</span>
                    </div>}
                    {weather.weather[0].main !== "Rainy" && weather.weather[0].main !== "Haze" && weather.weather[0].main !== "Sunny" && weather.weather[0].main !== "Clear" && <div className=' flex flex-col items-center text-gray-400 md:w-1/6'>
                        <AiFillCloud className='text-[6.5rem] animate-pulse' />
                        <span className='text-xl font-semibold text-blue-900'>{weather.weather[0].main}</span>
                    </div>}
                </div>

                <div className="temperature flex flex-col items-center md:w-2/6 space-y-4 ">
                    <span className="currentTemp text-3xl"><b>{weather.main.temp}&deg;</b>C</span>
                    <div className='flex space-x-5'>
                        <span className="maxtemp text-xl"><b>{weather.main.temp_max}&deg;</b>C <br /> Max</span>
                        <span className="mintemp text-xl"><b>{weather.main.temp_min}&deg;</b>C <br /> Min</span>
                    </div>
                </div>
                <div className="grid grid-cols-4 space-x-3">
                    <div className="humidity  text-center">
                        <WiHumidity className='text-[3rem] m-auto text-blue-700' />
                        <span className="humVal text-xl font-semibold"> {weather.main.humidity}%</span>
                    </div>
                    <div className="wind text-center">
                        <SiWindicss className='text-[3rem] m-auto text-blue-900' />
                        <span className="windspeed font-semibold text-xl">{weather.wind.speed}km/h</span>
                    </div>
                    <div className="sunrise text-center">
                        <WiSunrise className='text-[3rem] m-auto text-orange-400' />
                        <span className="sunriseTime text-xl font-semibold">{getCurrentTime(sunrise).split("|")[1]}</span>
                    </div>
                    <div className="sunset text-center">
                        <WiSunset className='text-[3rem] m-auto text-orange-400' />
                        <span className="sunsetTime font-semibold text-xl">{getCurrentTime(sunset).split("|")[1]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
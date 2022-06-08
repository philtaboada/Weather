import React, { useState } from 'react'

const Weather = ({ weather, isLoading }) => {

    const [isBool, setIsBool] = useState(true)
    const [color, setColor] = useState('#45B3BF')

    const convertirCelsius = () => {
        let kelvin = weather?.main.temp
        const celsius = kelvin - 273.15
        const celsiusRed = celsius.toFixed(2)
        return celsiusRed
    }

    const convertirLikeCelsius = () => {
        let kelvin = weather?.main.feels_like
        const celsius = kelvin - 273.15
        const celsiusRed = celsius.toFixed(2)
        return celsiusRed
    }

    const clickButton = () => {
        setIsBool(!isBool)
        if (color === '#45B3BF') {
            setColor('#5EADF2')
        } else {
            setColor('#45B3BF')
        }

    }

    return (
        <div className='container'>
            <div style={{ backgroundColor: `${color}` }} className='city-container'>
                <h1 className='city'><span><i class="fa-solid fa-location-arrow"></i></span> {weather?.name}</h1>
            </div>
            <div className='container-app'>
                <div style={{ backgroundColor: `${color}` }} className='container-img'>
                    <img className='weather-img' src={weather && `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="weather" />
                    <p className='type-of-weather'>{weather?.weather[0].description}</p>
                </div>
                <div style={{ backgroundColor: `${color}` }} className='container-temperature'>
                    <p className='temperature-number'>{isBool ? weather?.main.temp : convertirCelsius()}°</p>
                    <p>Feel like: {isBool ? weather?.main.feels_like : convertirLikeCelsius()}</p>
                    <button onClick={clickButton} >{isBool ? 'Celsius' : 'Kelvin'}</button>
                </div>
            </div>
            <div style={{ backgroundColor: `${color}` }} className='container-additional'>
                <h5>Humidity: <span><i class="fa-solid fa-droplet"></i></span> {weather?.main.humidity} %</h5>
                <h5>Pressure: <span><i class="fa-solid fa-arrows-down-to-line"></i> </span> {weather?.main.pressure} hPa</h5>
                <h5>Wind speed: <span><i class="fa-solid fa-wind"></i></span> {weather?.wind.speed} m/s</h5>
            </div>
        </div>
    )
}

export default Weather


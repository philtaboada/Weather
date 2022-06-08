import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import IsLoader from './IsLoader'
import Weather from './Weather'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [isLoading, setIsLoading] = useState(true)

  let lat, long
  const API = 'd7382a2cac670c1e23cf092c97795b39'


  useEffect(() => {
    const success = pos => {
      lat = pos.coords.latitude
      long = pos.coords.longitude
      setCoords({ lat, long })
    }
    navigator.geolocation.getCurrentPosition(success)

  }, [])


  useEffect(() => {

    if (coords !== undefined) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.lat}&lon=${coords?.long}&appid=${API}`

      axios.get(url)
        .then(res => setWeather(res.data))

        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))
    }

  }, [coords])




  return (
    <div className="App">
      {
        isLoading ?
          <IsLoader />
          :
          <Weather
            weather={weather}
            isLoading={isLoading} />
      }
    </div>
  )
}

export default App

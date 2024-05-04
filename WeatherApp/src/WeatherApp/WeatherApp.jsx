import SearchBox from '../SearchBox/SearchBox'
import InfoBox from '../InfoBox/InfoBox'
import { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import DayInfo from '../components/DayInfo/DayInfo'
import CityDisplay from '../components/CityDisplay/CityDisplay'
import WeatherInfo from '../components/WeatherInfo/WeatherInfo'
import HumidityInfo from '../components/HumidityInfo/HumidityInfo'
import MinTemp from '../components/MinTemp/MinTemp'
import MaxTemp from '../components/MaxTemp/MaxTemp'
import FeelsLike from '../components/FeelsLike/FeelsLike'

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city:"",
        feelslike:"",
        temp: "",
        tempMin: "",
        tempMax: "",
        humidity: "",
        weather: "",
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }
    return(
        <div className='container'>
            <Sidebar updateInfo={updateInfo} info={weatherInfo}/>
            <DayInfo/>
            <CityDisplay info={weatherInfo}/>
            <WeatherInfo info={weatherInfo}/>
            <HumidityInfo info={weatherInfo}/>
            <MinTemp info={weatherInfo}/>
            <MaxTemp info={weatherInfo}/>
            <FeelsLike info={weatherInfo}/>
            {/* <SearchBox updateInfo={updateInfo} /> */}
            {/* <InfoBox info={weatherInfo}/> */}
        </div>
    )
}

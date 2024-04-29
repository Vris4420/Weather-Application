import SearchBox from '../SearchBox/SearchBox'
import InfoBox from '../InfoBox/InfoBox'
import { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import DayInfo from '../components/DayInfo/DayInfo'

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
            {/* <SearchBox updateInfo={updateInfo} /> */}
            <InfoBox info={weatherInfo}/>
        </div>
    )
}

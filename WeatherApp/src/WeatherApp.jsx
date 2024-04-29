import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'

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
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
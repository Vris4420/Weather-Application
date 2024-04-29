import { assets } from '../../assets/assets'
import './HumidityInfo.css'

export default function HumidityInfo({info}){
    return(
        <div className='humidity'>
            <img src={assets.humidityBG} alt="" />
            <div className="humidity-status">
                <div className="humidity-title">
                    Humidity Status:
                </div>
                <div className="humidity-info">
                    {info.humidity}
                </div>
            </div>

        </div>
    )
}
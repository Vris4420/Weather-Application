import { assets } from '../../assets/assets'
import './MaxTemp.css'

export default function MaxTemp({info}){
    return(
        <div className='maxtemp'>
            <img src={assets.humidityBG} alt="" />
            <div className="maxtemp-status">
                <div className="maxtemp-title">
                    Maximum Temperature:
                </div>
                <div className="maxTempIcon">
                    <img src={assets.maxTempIcon} alt="" />
                </div>
                {info.tempMax !== "" ? (
                    <div className="maxtemp-info">
                        {info.tempMax}&deg;C
                    </div>
                ):(
                    ""
                )}
            </div>

        </div>
    )
}
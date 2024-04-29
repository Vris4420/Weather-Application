import { assets } from '../../assets/assets'
import './MinTemp.css'

export default function MinTemp({info}){
    return(
        <div className='mintemp'>
            <img src={assets.humidityBG} alt="" />
            <div className="mintemp-status">
                <div className="mintemp-title">
                    Minimum Temperature:
                </div>
                <div className="mintemp-info">
                    {info.tempMin}
                </div>
            </div>

        </div>
    )
}
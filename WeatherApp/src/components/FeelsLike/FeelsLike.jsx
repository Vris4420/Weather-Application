import { assets } from '../../assets/assets'
import './FeelsLike.css'

export default function FeelsLike({info}){
    return(
        <div className='feelslike'>
            <img src={assets.humidityBG} alt="" />
            <div className="feelslike-status">
                <div className="feelslike-title">
                    Feels Like:
                </div>
                {info.feelsLike !== "" ? (
                    <div className="feelslike-info">
                        {info.feelsLike}&deg;C
                    </div>
                ):(
                    ""
                )}
            </div>

        </div>
    )
}
import './Weather.css';
import { assets } from '../../assets/assets';

export default function WeatherInfo({ info }) {
    return (
        <>
            {info.weather === "haze" ? (
                <div className='weather'>
                    <img src={assets.haze} alt="" />
                    <div className='weather-info'>
                        <div className="weather-title">
                            Weather Status:
                        </div>
                        <div className="weather-status">
                            <div className="weather-status-title">
                                {info.weather}
                            </div>
                            <div className="weather-status-icon">
                                <img src={assets.hazeIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            ) : info.weather === "overcast clouds" ? (
                <div className='weather'>
                    <img src={assets.overCastClouds} alt="" />
                    <div className='weather-info'>
                        <div className="weather-title">
                            Weather Status:
                        </div>
                        <div className="weather-status">
                            <div className="weather-status-title">
                                {info.weather}
                            </div>
                            <div className="weather-status-icon">
                                <img src={assets.partiallyCloudyIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            ) :  info.weather === "clear sky" ? (
                <div className='weather'>
                    <img src={assets.clearSky} alt="" />
                    <div className='weather-info'>
                        <div className="weather-title">
                            Weather Status:
                        </div>
                        <div className="weather-status">
                            <div className="weather-status-title">
                                {info.weather}
                            </div>
                            <div className="weather-status-icon">
                                <img src={assets.clearSkyIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            ):  info.weather === "smoke" ? (
                <div className='weather'>
                    <img src={assets.smoke} alt="" />
                    <div className='weather-info'>
                        <div className="weather-title">
                            Weather Status:
                        </div>
                        <div className="weather-status">
                            <div className="weather-status-title">
                                {info.weather}
                            </div>
                            <div className="weather-status-icon">
                                <img src={assets.somkeIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            ):  info.weather === "broken clouds" ? (
                <div className='weather'>
                    <img src={assets.brokenclouds} alt="" />
                    <div className='weather-info'>
                        <div className="weather-title">
                            Weather Status:
                        </div>
                        <div className="weather-status">
                            <div className="weather-status-title">
                                {info.weather}
                            </div>
                            <div className="weather-status-icon">
                                <img src={assets.overCastCloudsIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            ):(
                <div className='weather'>
                    <img src={assets.grasslands} alt="" />
                    <div className='weather-info'>
                        <div className="weather-title">
                            Weather Status:
                        </div>
                        <div className="weather-status">
                            <div className="weather-status-title">
                                {info.weather}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

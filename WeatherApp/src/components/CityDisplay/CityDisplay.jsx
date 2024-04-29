import './CityDisplay.css';
import { assets } from '../../assets/assets';

export default function CityDisplay({ info }) {
    return (
        <div className='cont'>
            <img src={assets.dotBackground} alt="" />
            {info.city === "" ? (
                <>
                    <div className="temp">
                        Temp
                    </div>
                    <div className="city-name">
                        Search...
                    </div>
                </>
            ) : (
                <>
                    <div className="temp">
                        {info.temp}&deg;C
                    </div>
                    <div className="city-name">
                        {info.city}
                    </div>
                </>
            )}
        </div>
    );
}

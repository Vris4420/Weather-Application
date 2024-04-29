import SearchBox from '../../SearchBox/SearchBox.jsx'
import { assets } from '../../assets/assets.js'
import './Sidebar.css'

 function Sidebar({updateInfo, info}){
    return(
        <div className='sidebar'>
            <div className="container">
                <div className="bg-img">
                    <img src={assets.background} alt="img" />
                </div>
                {info.temp === "" ? "" : (
                    <div className="icons">
                        {info.humidity > 60 ? (
                            <img src={assets.rainGIF}/>
                        ) : 
                        info.temp > 15 ? (
                            <img src={assets.sunIcon} alt="" />
                        ) : (
                            <img src={assets.winterIcon} alt="" />
                        )}
                    </div>
                )}

                <div className="title">
                    <h1>
                        Weather<br/>Application
                    </h1>
                </div>
                <div className="search-box">
                    <SearchBox updateInfo={updateInfo}/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
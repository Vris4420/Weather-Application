import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css"

export default function InfoBox({info}){
    const rain_img = "https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.jpg?s=2048x2048&w=is&k=20&c=ky5JTM-ZpKr0zoDfB4jnatyATQ-5ZG7kdg9vU8ndrww=";
    const cold_img = "https://media.istockphoto.com/id/499377113/photo/village-in-the-middle-of-himalaya-mountains.jpg?s=612x612&w=0&k=20&c=VpbFQ7GpdHV4N26rnkPSr2tTEEVmIMZhtyf2q0rfde0=";
    const hot_img = "https://media.istockphoto.com/id/474966771/photo/seascape-and-sun-on-blue-sky.jpg?s=2048x2048&w=is&k=20&c=hrmrIojlb0kwLyKepqqCp4nqwK95GFcbIyXIeBDJaak=";
    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 80 ? rain_img : info.temp > 15 ? hot_img : cold_img}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} {
                    info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon/>
                }
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                <div>Temperature: {info.temp}&deg;C</div>
                <div>Humidity: {info.humidity}</div>
                <div>Min Temperature: {info.tempMin}&deg;C</div>
                <div>Max Temperature: {info.tempMax}&deg;C</div>
                <div>Weather :{info.weather}</div>
                <div>Feels Like: {info.feelslike}&deg;C</div>
                
                </Typography>
            </CardContent>
            </Card>
            </div>
           

        </div>
    )
}
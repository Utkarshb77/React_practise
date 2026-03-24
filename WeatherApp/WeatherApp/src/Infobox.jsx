import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Info.css';

export default function Infobox({ info }){
    return (
        <div className="Infobox">
            <div className="CardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}, {info.country}
                        </Typography>
                        <Typography component="span" variant="body2" sx={{ color: 'text.secondary' }}>
                            <p>Temperature: {info.temp}°C</p>
                            <p>Min Temperature: {info.temp_min}°C</p>
                            <p>Max Temperature: {info.temp_max}°C</p>
                            <p>Humidity: {info.humidity}%</p>
                            <p>Pressure: {info.pressure} hPa</p>
                            <p>The Weather can be Described as  <i>{info.weather}</i> today.</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
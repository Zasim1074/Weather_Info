/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BeachAccessRoundedIcon from '@mui/icons-material/BeachAccessRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

import "./infoBox.css";
export default function InfoBox({ info }) {
  const rain_img_url =
    "https://images.unsplash.com/photo-1599806112354-67f8b5425a06?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const hot_img_irl =
    "https://plus.unsplash.com/premium_photo-1688804790295-8356369391ea?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const cold_img_url =
    "https://plus.unsplash.com/premium_photo-1664301524345-90a694774519?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const normal_img_url =
    "https://plus.unsplash.com/premium_photo-1733353243263-c3756cbde650?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdpbmQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    let Cityname = info.city.toUpperCase();
  return (
    <div>
      <h3>Weather Information - {info.temp}</h3>
      <div className="infoBox">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={
              info.humidity > 80
                ? rain_img_url : info.temp < 20
                ? cold_img_url : info.temp < 30
                ? normal_img_url : hot_img_irl
            }
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Cityname} {
              info.humidity > 80
                ? <BeachAccessRoundedIcon /> : info.temp < 20
                ? <AcUnitIcon /> : info.temp < 30
                ? <WbSunnyRoundedIcon /> : <LightModeRoundedIcon  fontSize="large"/>
            }
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Feels Like: {info.feelsLike}&deg;C</p>
              <p>Min Temp: {info.tempMin}&deg;C</p>
              <p>Max Temp: {info.tempMax}&deg;C</p>
              <p>Pressure: {info.pressure}</p>
              <p>Humidity: {info.humidity}</p>
              <p>Visibility: {info.visibility}</p>
              <p>Sunrise Time: {info.SunriseTime}</p>
              <p>Sunset Time: {info.sunsetTime}</p>
              <p>weather can be described as {
                info.humidity > 80
                  ? "Rainny" : info.temp < 20
                  ? "Cold Outside" : info.temp < 30
                  ? "Normal" : "Hot"
              }
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

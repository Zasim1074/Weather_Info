import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        temp: 17.05,
        feelsLike: 16.46,
        tempMin: 17.05,
        tempMax: 17.05,
        humidity: 63,
        pressure: 1014,
        visibility: 4000,
        SunriseTime: 1739928379,
        sunsetTime: 1739969037,
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo); 
       // console.log("Updating weatherInfo with:", result);
    };

    return (
        <>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} /> 
        </>
    );
}

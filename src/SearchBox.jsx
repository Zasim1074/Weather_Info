/* eslint-disable react/prop-types */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
  
  const [city, setCity] = useState("");
  const API_url = "https://api.openweathermap.org/data/2.5/weather?";
  const API_key = "158a7e1989b182a83153e947f8291545";

  let getWeatherInfo = async () => {
    let response = await fetch(`${API_url}&q=${city}&appid=${API_key}&units=metric`);
    if (!response.ok) throw new Error("City not found or API issue");
    let jsonResponse = await response.json();

    let result =  {
      city: city,
      temp: jsonResponse.main.temp,
      feelsLike: jsonResponse.main.feels_like,
      tempMin:jsonResponse.main.temp_min,
      tempMax:jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      pressure: jsonResponse.main.pressure,
      visibility: jsonResponse.visibility,
      SunriseTime: jsonResponse.sys.sunrise,
      sunsetTime: jsonResponse.sys.sunset,
    };
    return result;
  };
  

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  }

  return (
    <>
      <h2>Find Weather According to your Location</h2>
      <hr></hr>
        <br></br>
    
    <form onSubmit={handleSubmit}>
        
            <TextField
                id="city"
                size="small"
                label="City"
                variant="filled"
                required
                value={city}
                onChange={handleChange}
            />
            &nbsp;&nbsp;
        
            <Button
                type="submit"
                variant="contained"
                value={city}
                onChange={handleChange}
            >
                Get Weather
            </Button>
        </form>
    </>
  );
}

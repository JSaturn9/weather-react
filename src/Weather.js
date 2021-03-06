import React from "react";
import axios from 'axios';
import Loader from "react-loader-spinner";

export default function Weather(props) {

    function handleResponse (response) {
        alert(`The weather in ${response.data.name} is ${response.data.main.temp}°C`);
    }
 
 let apiKey = "8aeae4561f5b9cd8fde3dc22aa02472c";   
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;   
 
 axios.get(apiUrl).then(handleResponse);
 return (
    <Loader
       type="Puff"
       color="white"
       height={100}
       width={100}
       timeout={3000} //3 secs

    />
   );
}
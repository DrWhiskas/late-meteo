import React, { useEffect, useState } from 'react';
import '../styles/meteo.css'

export default function Meteo({city}) {
	// variables
	const [weatherData, setWeatherData] = useState(null);
    const [temp, setTemp] = useState(null)


	// fetch api weather
	useEffect(() => {
		async function fetchWeather() {
			const url =
				'https://weather-api138.p.rapidapi.com/weather?city_name=' + city;
			const options = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key':
						'0312da96d3mshbfb763dd0359808p1a6cc3jsn11f261ccb01a',
					'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com',
				},
			};
			try {
				const response = await fetch(url, options);
				const result = await response.json();
				const convertDegree = Math.floor(result.main.temp - 273.15);
				setWeatherData(result);
				setTemp(convertDegree);
			} catch (error) {
				console.error(error);
			}
		}
		// set interval to fetch weather data every 4 hours
		const intervalId = setInterval(() => {
			fetchWeather();
			console.log(intervalId);
		}, 14400000); // 4 hours

		fetchWeather();

		return () => clearInterval(intervalId)
	}, [city]);

    if(!weatherData){
        return <div className='loading'>Loading...</div>
    }
	return (
		<div className="meteo">
			<div className="meteo__container">
				<div className="meteo__container__localisation">
					
					<span className="meteo__container__localisation__city">
						{weatherData.name
							.replace('Arrondissement de', '')
							.replace("Arrondissement d'", '')}
					</span>
					<span className="meteo__container__localisation__city__temp">
						{temp}°C
					</span>
				</div>
			</div>
		</div>
	);
}

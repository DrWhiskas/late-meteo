import React, { useEffect, useState } from 'react';
import '../styles/meteo.css'

export default function Meteo() {
	const [weatherData, setWeatherData] = useState(null);
    const [temp, setTemp] = useState(null)
    const [city, setCity] = useState('Paris')



	useEffect(() => {
		async function fetchWeather() {
			const url =
				'https://weather-api138.p.rapidapi.com/weather?city_name='+ city;
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
                setWeatherData(result)
                setTemp(convertDegree)
                
			} catch (error) {
				console.error(error);
			}
		}
		fetchWeather();
	}, [city]);

    if(!weatherData){
        return <div className='loading'>Loading...</div>
    }
	return (
		<div className="meteo">
			<div className="meteo__container">
				<div className="meteo__container__localisation">
					{weatherData.name
						.replace('Arrondissement de', '')
						.replace("Arrondissement d'", '')}
					{temp}°C
				</div>

				<select name="city" id="city" onChange={(e) => setCity(e.target.value)}>
					<option value="Paris">Paris</option>
					<option value="Lyon">Lyon</option>
					<option value="Argenteuil">Argenteuil</option>
					<option value="Bordeaux">Bordeaux</option>
					<option value="Nice">Nice</option>
					<option value="Nantes">Nantes</option>
					<option value="Toulouse">Toulouse</option>
					<option value="Lille">Lille</option>
					<option value="Strasbourg">Strasbourg</option>
				</select>
			</div>
		</div>
	);
}

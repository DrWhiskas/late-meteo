import React from 'react';
import citiesData from '../data/cities.json';
import '../styles/city.css';

export default function City({ setCity }) {
	
	function handleChangeCity(e) {
		const selectedCity = citiesData.cities.find(
			(city) => city.name === e.target.value
		);
		setCity(selectedCity.timezone);
		console.log(setCity);
	}
	return (
		<div className="city">
			<select
				className="city__select"
				name="city"
				id="city"
				onChange={handleChangeCity}
			>
				<option value="">Choose your City</option>
				{citiesData.cities.map((city, index) => (
					<option key={index} value={city.name}>
						{city.name}
					</option>
				))}
			</select>
		</div>
	);
}

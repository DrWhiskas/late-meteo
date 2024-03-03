import React from 'react';
import cities from '../data/cities.json';
import '../styles/city.css'


export default function City({ setCity }) {
	return (
		<div className="city">
			<select
				className="city__select"
				name="city"
				id="city"
				onChange={(e) => setCity(e.target.value)}
			>
				<option value="">Choose your City</option>
				{cities.villes.map((item, index) => (
					<option key={index} value={item}>
						{item}
					</option>
				))}
			</select>
		</div>
	);
}

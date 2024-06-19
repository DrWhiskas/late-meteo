import React, { useEffect, useState } from 'react';
import Time from '../components/Time';
import Meteo from '../components/Meteo';
import Footer from '../components/Footer';
import '../styles/home.css';

export default function Home() {
	
	const [currentTime, setCurrentTime] = useState('');
	const [isNight, setIsNight] = useState(true);
	const [selectedTimezone, setSelectedTimezone] = useState('Europe/Paris');

	function handleCityChange(timezone) {
		setSelectedTimezone(timezone);
	}
	useEffect(() =>{
		const timer = setInterval(() =>{
			const [hours, minutes, seconds] = currentTime.split(':').map(Number); //split the current time in 3
			if (hours >= 6 && hours <= 17) {
				setIsNight(false);
			} else{
				setIsNight(true)
			}
		}, 1000) // interval of 10min 
		return() => clearInterval(timer)
	}, [currentTime])

	function timeUpdate(showTime) {
		setCurrentTime(showTime);
		console.log(showTime);
	}

	return (
		<div className={isNight ? 'home night' : 'home day'}>
			{isNight ? (
				<>
					<div className="stars"></div>
					<div className="twinkling"></div>
					<div className="clouds"></div>
				</>
			) : (
				<>
					<div className="stars"></div>
					<div className="twinkling"></div>
					<div className="clouds"></div>
				</>
			)}
			<div className="home__weather">
				<div className="home__weather__container">
					<Meteo setCity={handleCityChange} />
					<Time timezone={selectedTimezone} timeUpdate={timeUpdate} />
				</div>
			</div>
			<Footer />
		</div>
	);
}

import React from 'react';
import Time from '../components/Time';
import Meteo from '../components/Meteo';
import Footer from '../components/Footer';
import '../styles/home.css';

export default function Home() {
	return (
		<div className="home">
			<div className="stars"></div>
			<div className="twinkling"></div>
			<div className="clouds"></div>
			<div className="home__weather">
				<div className="home__weather__container">
					<Meteo />
					<Time />
				</div>
			</div>
            <Footer />
		</div>
	);
}

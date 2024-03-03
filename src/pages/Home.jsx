import React, {useState} from 'react';
import Time from '../components/Time';
import Meteo from '../components/Meteo';
import City from '../components/City';
import Footer from '../components/Footer';
import '../styles/home.css';

export default function Home() {
	    const [city, setCity] = useState('Paris');

	return (
		<div className="home">
			<div className="stars"></div>
			<div className="twinkling"></div>
			<div className="clouds"></div>
			<City setCity={setCity} />
			<div className="home__weather">
				<div className="home__weather__container">
					<Meteo city={city} />
					<Time />
				</div>
			</div>
			<Footer />
		</div>
	);
}

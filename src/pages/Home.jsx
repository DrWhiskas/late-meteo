import React from 'react';
import Time from '../components/Time';
import Meteo from '../components/Meteo';
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
		</div>
	);
}

/*


.time{
    width: 100%;
    height: 100svh;
    position: absolute;
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
}
.time__container{
    width: 50%;
    height: 30vh;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-size: calc(30% + 8svw);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

*/
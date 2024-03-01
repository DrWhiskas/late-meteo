import React from 'react';
import Time from '../components/Time';
import '../styles/home.css';

export default function Home() {
	return (
		<div className="home">
			<div className="stars"></div>
			<div className="twinkling"></div>
			<div className="clouds"></div>
			<Time />
		</div>
	);
}

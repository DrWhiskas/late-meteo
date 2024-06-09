import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';


export default function Time({ timezone }) {
	const [time, setTime] = useState(moment.tz(timezone));

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(moment.tz(timezone));
			console.log(timezone);
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, [timezone]);
 useEffect(() => {
		setTime(moment.tz(timezone));
 }, [timezone]);
	const showTime = `${time.format('HH')}:${time.format('mm')}:${time.format(
		'ss'
	)}`;
	return (
		<div className="time">
			<div className="time__container">{showTime}</div>
		</div>
	);
}

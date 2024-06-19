import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

export default function Time({ timezone, timeUpdate }) {
	const [time, setTime] = useState(moment.tz(timezone));

	useEffect(() => {
		const timer = setInterval(() => {
			const newTime = moment.tz(timezone);
			setTime(newTime);
			timeUpdate(newTime.format('HH:mm:ss'));
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, [timezone, timeUpdate]);

	useEffect(() => {
		const newTime = moment.tz(timezone);
		setTime(newTime);
		timeUpdate(newTime.format('HH:mm:ss'));
	}, [timezone, timeUpdate]);

	const showTime = `${time.format('HH')}:${time.format('mm')}:${time.format(
		'ss'
	)}`;

	return (
		<div className="time">
			<div className="time__container">{showTime}</div>
		</div>
	);
}

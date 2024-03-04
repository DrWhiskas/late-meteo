import React, { useEffect, useState } from 'react';

export default function Time({ timeUpdate }) {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);
	useEffect(() => {
		const showTime =
			time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
		timeUpdate(showTime);
	}, [time]);

	const showTime =
		time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
	return (
		<div className="time">
			<div className="time__container">{showTime}</div>
		</div>
	);
}

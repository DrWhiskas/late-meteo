import React, { useEffect, useState } from "react";
import '../styles/time.css'

export default function Time(){

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []); 

    const showTime = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
    return (
			<div className="time">
				<div className="time__container">{showTime}</div>
			</div>
		);
}
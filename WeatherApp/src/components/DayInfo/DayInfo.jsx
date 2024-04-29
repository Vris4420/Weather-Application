import React, { useState, useEffect } from 'react';
import './DayInfo.css';

export default function DayInfo() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000); // Update time every second
        return () => clearInterval(interval);
    }, []);

    const options = {  
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = time.toLocaleString(undefined, options);

    return (
        <div className="DayInfoContainer">
            <div className="Time">{time.toLocaleTimeString()}</div>
            <div className="Day">{time.toLocaleString('en-US', { weekday: 'long' })}</div>
            <div className="Date">{formattedDate}</div>
        </div>
    );
}

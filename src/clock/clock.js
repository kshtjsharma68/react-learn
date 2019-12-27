import React from 'react';

const AlarmClockDisplay = ({hours, minutes, seconds, ampm}) => (
    <div className="clock">
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
        <span>{ampm}</span>
    </div>
)


const seriallizeClockTime = date => 
({
hours: date.getHours(),
minutes: date.getMinutes(),
seconds: date.getSeconds()
})

const civilianHours = clockTime => 
({
...clockTime,
hours: (clockTime.hours > 12) ? clockTime.hours - 12 : clockTime
})

const appendAMPM = clockTime => 
({
...clockTime,
ampm : (clockTime.hours >= 12) ? "PM" : "AM"
})

export {
    AlarmClockDisplay,
    seriallizeClockTime,
    civilianHours,
    appendAMPM
};
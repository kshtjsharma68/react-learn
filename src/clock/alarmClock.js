import React from 'react';

const onSecond = () => 1000;

const AlarmClockDisplay = ({hours, minutes, seconds, ampm}) => {
    return (
        <div className="clock">
            <span>{hours}</span>
            <span>:</span>
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
            <span>{ampm}</span>
        </div>
    )
}


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

const appendComponent = (WComponent) => civilianTime  => {console.log(civilianTime)
    return class extends React.Component {
        render() {
            return (
                <div>
                    <WComponent {...civilianTime}/>
                </div>
            )
        }
    }
}

const compose = (...fns) => (args) => fns.reduce((composed, fn) => fn(composed), args);

const r = _ => 
compose(
    seriallizeClockTime,
    civilianHours, 
    appendAMPM,
    appendComponent(AlarmClockDisplay)
)(new Date());

export default r;
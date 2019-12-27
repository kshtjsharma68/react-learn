import React from 'react';
import { AlarmClockDisplay,
    seriallizeClockTime,
    civilianHours,
    appendAMPM } from './clock';

const onSecond = () => 1000;


const appendComponent = WComponent => civilianTime  => {
    return class extends React.Component {
        constructor(props) {
            super(props);
        }

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


const r = () => 
compose(
    seriallizeClockTime,
    civilianHours, 
    appendAMPM,
    appendComponent(AlarmClockDisplay)
)(new Date());
export default r();
import React, { useEffect, useState } from 'react';

function convertTime(date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours} : ${minutes} : ${seconds}`
}
function useClock(props) {
    const [time, setTime] = useState('');

    useEffect(() => {
        console.log('component did mount');
        const clockInterval = setInterval(() => {
            const newTimeString = convertTime(new Date);
            setTime(newTimeString)
        }, 1000)

        return () => {
            console.log('componentWillUnMount');
            clearInterval(clockInterval);
        }
    }, [])

    return { time };
}

export default useClock;
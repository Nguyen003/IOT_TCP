import React, { useState, useEffect, useRef } from 'react';

function useTimeTracker(isRunning) {
    const [timer, setTimer] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            countRef.current = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        } else {
            clearInterval(countRef.current);
            setTimer(0);
        }

        return () => clearInterval(countRef.current);
    }, [isRunning]);

    const formatTime = (timer) => {
        const setSeconds = `0${(timer % 60)}`.slice(-2);
        const minutes = `${(Math.floor(timer / 60))}`;
        const setMinutes = `0${(minutes % 60)}`.slice(-2);
        const setHours = `0${Math.floor(timer / 3600)}`.slice(-2);

        return `${setHours}:${setMinutes}:${setSeconds}`;
    };

    return { timer, formatTime };
}

export default useTimeTracker;
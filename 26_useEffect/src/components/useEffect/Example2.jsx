import React, { useState, useEffect } from 'react';

function Example2() {
    const [time, setTime] = useState("");

    useEffect(() => { 
         setInterval(() => {
            const updateTime = new Date();
            setTime(updateTime.toLocaleTimeString());
        }, 1000);

      
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold mb-2">useEffect Hook</h1>
                <h3 className="text-xl font-semibold">Time: <span className="text-emerald-400">{time}</span></h3>
            </div>
        </div>
    );
}

export default Example2;

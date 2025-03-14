import { useState, useEffect } from 'react';

function UseeffectCleanupFn() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(timer); // Cleanup function to prevent memory leaks
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80">
                <h1 className="text-3xl font-bold mb-4 text-emerald-400">useEffect Cleanup</h1>
                
                <p className="text-lg font-semibold mb-2">Seconds Elapsed:</p>
                <div className="text-4xl font-bold text-emerald-400">{seconds}</div>

                <h3 className="mt-4 text-sm text-gray-400">Timer will stop when the component unmounts.</h3>
            </div>
        </div>
    );
}

export default UseeffectCleanupFn;

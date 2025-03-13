import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => { 
        console.log("Count value:", count);
    }, [count]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold mb-4">useEffect Hook</h1>
                <p className="text-lg font-semibold mb-4">Count: <span className="text-emerald-400">{count}</span></p>
                <button 
                    onClick={() => setCount(count + 1)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded-lg transition-all"
                >
                    Increment
                </button>
            </div>
        </div>
    );
}

export default Example;

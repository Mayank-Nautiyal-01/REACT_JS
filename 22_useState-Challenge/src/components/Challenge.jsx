import React, { useState } from 'react';

function Challenge() {
    const [counter, setCounter] = useState(0);
    const [step, setStep] = useState(1); // State to store step value

    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">UseState Challenge</h1>

            <section className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Count: {counter}</h3>
                <input 
                    type="number" 
                    value={step} 
                    onChange={(e) => setStep(Number(e.target.value))} 
                    className="mt-2 border border-gray-300 p-2 rounded-lg"
                    placeholder="Enter step value"
                />
            </section>

            <section className="flex gap-4">
                <button 
                    onClick={() => setCounter(counter + step)} 
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Increment
                </button>

                <button 
                    onClick={() => setCounter(counter - step)} 
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                    Decrement
                </button>

                <button 
                    onClick={() => setCounter(0)} 
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                >
                    Reset
                </button>
            </section>
        </section>
    );
}

export default Challenge;

import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrementClick = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecrementClick = () => {
        setCount((prev) => prev - 1);
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <h1 className='text-gray-900 font-bold text-5xl mb-4'>Counter</h1>
            <h2 className='text-gray-900 font-semibold text-4xl mb-6'>{count}</h2>
            <div className="flex gap-4">
                <button className='px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition' onClick={handleIncrementClick}>
                    Increment
                </button>
                <button className='px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition' onClick={handleDecrementClick}>
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default Counter;

import { useState,useEffect } from 'react';

function EffectChallenge() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(()=>{
     document.title=`count:${count}`;
    },[count])

    useEffect(()=>{
      console.log(name);
    },[name])
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-96">
                <h1 className="text-3xl font-bold mb-4 text-emerald-400">useEffect Challenge</h1>

                <p className="text-lg font-semibold mb-2">Count: <span className="text-emerald-400">{count}</span></p>
                <button 
                    onClick={() => setCount(count + 1)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded-lg transition-all mb-4"
                >
                    Increment
                </button>

                <p className="text-lg font-semibold mb-2">Name: <span className="text-emerald-400">{name}</span></p>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 rounded-lg text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Enter your name"
                />
            </div>
        </div>
    );
}

export default EffectChallenge;

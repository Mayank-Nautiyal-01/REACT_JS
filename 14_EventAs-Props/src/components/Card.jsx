import React from 'react'

function Card({title,description,onCardClick}) {
   
  return (
    <div >
    <button className="bg-white shadow-md rounded-lg p-2 w-30 cursor-pointer hover:shadow-xl transition duration-300"  onClick={()=>onCardClick(title)}>Click</button>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default Card
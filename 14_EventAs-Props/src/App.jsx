import React from 'react'
import Card from './components/Card'

function App() {
  const cardData = [
    { title: "Card 1", description: "This is the first card" },
    { title: "Card 2", description: "This is the second card" },
    { title: "Card 3", description: "This is the third card" },
  ];

  const handleCardClick = (title) => {
    alert(`card clicked: ${title}`);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-red-300">React Event Handling Example</h1>

      {/* Child div needs flex to align cards in a row */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} onCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;

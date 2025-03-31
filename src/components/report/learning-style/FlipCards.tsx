"use client";

import React, { useState } from "react";

interface Card {
  image: string;
  title: string;
  content: string;
}

const FlipCard = ({ card }: { card: Card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative h-64 w-64 cursor-pointer perspective-1000"
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center p-4 backface-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-6 rotate-y-180 backface-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="h-16 w-16 mb-4 object-contain"
          />
          <h3 className="text-xl font-bold mb-2 text-center">{card.title}</h3>
          <p className="text-gray-700 text-center">{card.content}</p>
        </div>
      </div>
    </div>
  );
};

const FlipCardGrid = () => {
  const cards = [
    {
      image: "/LearningStyle/Ears.svg",
      title: "Title 1",
      content: "This is content for card 1.",
    },
    {
      image: "/LearningStyle/Eyes.svg",
      title: "Title 2",
      content: "This is content for card 2.",
    },
    {
      image: "/LearningStyle/Book.svg",
      title: "Title 3",
      content: "This is content for card 3.",
    },
    {
      image: "/LearningStyle/Hand.svg",
      title: "Title 4",
      content: "This is content for card 4.",
    },
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <FlipCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default FlipCardGrid;

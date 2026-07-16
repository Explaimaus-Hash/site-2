import React, { useState } from "react";
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "rounded-lg relative bg-white overflow-hidden transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
      "w-full h-72 md:h-96"
    )}
  >
    <img
      src={card.src}
      alt={card.title}
      className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110 p-2"
    />
    <div
      className={cn(
        "absolute inset-0 bg-black/65 flex flex-col justify-start py-6 px-6 transition-opacity duration-300",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-xl md:text-2xl font-bold text-white mb-3">
        {card.title}
      </div>
      <div className="text-sm md:text-base text-gray-200 leading-relaxed">
        {card.description}
      </div>
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

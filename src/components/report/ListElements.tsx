import React from "react";
import { Dot } from 'lucide-react';

interface ListItem {
  title?: string;
  content: string;
  icon?: React.ReactNode; // Can be text, emoji, image, or JSX
}

interface ListWithIconsProps {
  items: ListItem[];
}

const ListElements: React.FC<ListWithIconsProps> = ({ items }) => {
  return (
    <ul className="flex flex-col gap-4 mb-8 border-1 border-gray-300 rounded-xl p-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-3 justify-start ">
          {/* Render Icon or Default Symbol */}
          <span className={`flex items-center justify-center text-xl ${item.icon ? 'ml-2' : ''}`}>
            {item.icon || <Dot size={50}/>}
          </span>

          {/* Text Content */}
          <div className="">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600">{item.content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListElements;

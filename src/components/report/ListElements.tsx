import React from "react";
import { Dot } from "lucide-react";

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
    <div className=" flex items-center justify-center pb-5">
      <ul className="flex flex-col gap-4 border-1 border-gray-300 rounded-xl p-3 mx-1 lg:m-0 lg:max-w-[100%] md:max-w-[90%]">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3 justify-start ">
            {/* Render Icon or Default Symbol */}
            <span
              className={`flex items-center justify-center text-xl ${
                item.icon ? "ml-2" : ""
              }`}
            >
              {item.icon || <Dot size={50} />}
            </span>

            {/* Text Content */}
            <div className="">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListElements;

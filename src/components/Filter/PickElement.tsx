import React, { useState } from "react";
import { background, pokeTypes } from "../../store/types/pokeTypes";

interface Props {
  onSelectType: (type: string) => void;
}

export const PickElement: React.FC<Props> = ({ onSelectType }) => {
  const [element, setElement] = useState("");

  const handleClick = (type: string) => {
    if (type === element) {
      setElement("all");
      onSelectType("all");
    } else {
      setElement(type);
      onSelectType(type);
    }
  };
  return (
    <div className="my-5 d-flex flex-wrap justify-content-center">
      {pokeTypes.map((item, index) => (
        <button
          style={{ backgroundColor: background[item.name] || "#ffffff2d" }}
          onClick={() => {
            handleClick(item.id);
          }}
          className={`type btn m-1 p-3 ${
            element === item.id && `border border-white`
          }`}
          key={index}
        >
          <p className="text-center text-wrap fw-bold">{item.name}</p>
        </button>
      ))}
    </div>
  );
};

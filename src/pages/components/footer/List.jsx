import React, { useState } from 'react';

const List = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white">
      <div
        className="flex items-center justify-between cursor-pointer py-1"
        onClick={toggleOpen}
      >
        <h2 className="text-lg font-semibold pr-10">{title}</h2>
        <div
          className={`transition-transform duration-300 transform xl:hidden  ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      <ul
        className={`mt-4 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        } ${
          isOpen ? 'h-auto' : 'h-0'
        } sm:opacity-100 sm:h-auto sm:mt-2 xl:h-auto xl:opacity-100`}
      >
        {items.map((item, index) => (
          <li key={index} className="text-sm font-medium text-gray-600 mb-2">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;

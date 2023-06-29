import React from 'react';

const List2 = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <ul className="bg-gray-100 p-4">
      {items.map((item, index) => (
        <li key={index} className="p-2">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List2;

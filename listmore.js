import React from 'react';

const List2 = () => {
  const pic1 =
    'https://stackblitz.com/files/tailwindcss-aipmul/github/kbwoodall/tailwindcss-aipmul/main/bird.png';

  const pic2 =
    'https://stackblitz.com/files/tailwindcss-aipmul/github/kbwoodall/tailwindcss-aipmul/main/golfPants.jpg';

  const items = [pic1, pic2];

  return (
    <div className="bg-gray-100 p-4">
      <img class="flex justify-center items-center  pt-6 w-64" src={pic1} />
    </div>
  );
};

export default List2;

/*
   //{items.map((item, index) => (
      //  <img key={index} className="p-2">
      //    {item}
      //  </img>
      //))}
return (
    <ul className="bg-gray-100 p-4">
      {items.map((item, index) => (
        <li key={index} className="p-2">
          {item}
        </li>
      ))}
    </ul>
  );

*/

// Import stylesheets
import './style.css';

import React, { Component } from 'react';
import { render } from 'react-dom';

import { useState, useReducer, useEffect } from 'react';
import { createContext, useContext } from 'react';
import { NewTextInput } from './showText.js';
export const ExampleContext = createContext('Starting');

const GetVal = (val) => {
  alert('here now' + val);
};

const Side1 = () => {
  return (
    <div>
      <p className="text-md font-bold m-10">
        “Tailwind CSSx is the only framework that I've seen scale on large teams.
        It’s easy to customize, adapts to any design, and the build size is
        tiny.”
      </p>
      <p className="text-md font-bold m-10">{mystuff}</p>
      <p className="text-md font-bold m-10">{info}</p>
    </div>
  );
};

const App = () => {
  const [info, setInfo] = useState('ok now');
  const mystuff = useContext(ExampleContext);
  {Side1}
  <div>
    <p className="text-md font-bold m-10">
      “Tailwind CSS is the only framework that I've seen scale on large teams.
      It’s easy to customize, adapts to any design, and the build size is tiny.”
    </p>
    <p className="text-md font-bold m-10">{mystuff}</p>
    <p className="text-md font-bold m-10">{info}</p>
  </div>;
  return (
    <ExampleContext.Provider value={info}>
      <div className="flex justify-start bg-green-300  ">
        <div>
          <p className="text-md font-bold m-10">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
          <p className="text-md font-bold m-10">{mystuff}</p>
          <p className="text-md font-bold m-10">{info}</p>
        </div>
        <div>
          <NewTextInput />
        </div>

        <div>
          <p className="text-md font-bold m-10">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </div>
      </div>
    </ExampleContext.Provider>
  );
};

render(<App />, document.getElementById('app'));

/*
const TextInput = () => {
  const [text, setText] = useState('');
  const valueFromContext = useContext(ExampleContext);

  const alertme = () => {
    console.log('testing alert');
    alert('Move input ' + valueFromContext);
  };

  return (
    <div>
      <p className="text-md font-bold mt-10">Input here</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h3 className="text-md font-bold">You entered: {text} </h3>

      <button onClick={() => alertme()} className="text-md font-bold mt-2">
        Move Input {valueFromContext}
      </button>
    </div>
  );
};
*/

// Import stylesheets
import './style.css';

import React, { Component } from 'react';
import { render } from 'react-dom';

import { useState, useReducer, useEffect } from 'react';
import { createContext, useContext } from 'react';
import { NewTextInput } from './showText.js';
export const ExampleContext = createContext('');

const GetVal = (val) => {
  alert('here now' + val);
};

const LeftSide = () => {
  const fromContext = useContext(ExampleContext);
  return (
    <div>
      <p className="text-md font-bold m-10 w-32">
        “Tailwind CSS is the only framework that I've seen scale on large teams.
        It’s easy to customize, adapts to any design, and the build size is
        tiny.”
      </p>
      <p className="text-md font-bold m-10">{fromContext}</p>
    </div>
  );
};

const App = () => {
  const [info, setInfo] = useState('xxxx');
  //const mystuff = useContext(ExampleContext);

  return (
    <ExampleContext.Provider value={info}>
      <div className="flex justify-start bg-green-300 h-screen  ">
        <div className="bg-green-300">
          <LeftSide />
        </div>

        <div className="bg-green-300">
          <NewTextInput />
        </div>
        <div className="bg-green-300 ">
          <input
            type="text"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
          <button
            onClick={() => setInfo('hello')}
            className="text-md font-bold mt-10 ml-5"
          >
            Move Input {info}
          </button>
        </div>
      </div>
    </ExampleContext.Provider>
  );
};

render(<App />, document.getElementById('app'));

/*
    <div>
          <p className="text-md font-bold m-10">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
          <p className="text-md font-bold m-10">{mystuff}</p>
          <p className="text-md font-bold m-10">{info}</p>
        <
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

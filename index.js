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

const p1 = (param) => {
  return param;
};

const MiddleSide = () => {
  const fromContext = useContext(ExampleContext);

  const text = fromContext.split(' ');
  console.log(text);

  const result = (text) => {
    let f0 = text[0];
    let f1 = text[1];
    let f2 = text[2];
    let fin = f0 / 2;
    let fin1 = f2 / 2;
    console.log(fin1);
    return fin1;
  };

  result(text);

  return (
    <div className=" w-64 ml-4 border-dashed border-4 border-teal-600 bg-teal-400 mt-10 mr-4 ">
      <p className="bg-green-400 text-md font-bold pl-10 pt-5">“Parse formula "</p>

      <p className="text-md font-bold pl-10 pt-5">{fromContext}</p>
      <p className="text-md font-bold pl-10 pt-5 pb-5">x = {result(text)}</p>

    </div>
  );
};

const RightSide = () => {
  const fromContext = useContext(ExampleContext);
  return (
    <div className="w-64 ml-4 border-dashed border-4 border-black bg-teal-400 mt-10 mr-4">
      <p className="bg-green-400 text-md font-bold m-10 ">“Changes ”</p>
      <p className="text-md font-bold m-10">{fromContext}</p>
    </div>
  );
};

const App = () => {
  const [info, setInfo] = useState('2x = 144');
  //const mystuff = useContext(ExampleContext);

  return (
    <ExampleContext.Provider value={info}>
      <div className="flex justify-start bg-green-300 h-screen  ">
        <div className=" bg-green-300 flex-row">
          <div className=" mt-10 ml-5 ">
            <input
              type="text"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={() => setInfo('hey')}
              className="text-md font-bold mt-4 ml-5"
            >
              Move Input {info}
            </button>
          </div>
        </div>

        <div>
          <MiddleSide />
        </div>

        <div>
          <RightSide />
        </div>
      </div>
    </ExampleContext.Provider>
  );
};

render(<App />, document.getElementById('app'));

/*
 <p className="bg-green-400 text-md font-bold m-10 w-32 ">
        “Tailwind CSS is the only framework that I've seen scale on large teams.
        It’s easy to customize, adapts to any design, and the build size is
        tiny.”
      </p>

<div className="bg-green-300 ">
          <NewTextInput />
        </div>

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

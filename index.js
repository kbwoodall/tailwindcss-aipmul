// Import stylesheets
import './style.css';

import React, { Component } from 'react';
import { render } from 'react-dom';

import { useState, useReducer, useEffect } from 'react';

const logger = (props) => {
  console.log(props.value);
  alert('props ' + props.value);
};

const GetVal = (val) => {
  alert('here ' + val);
};

const TextInput = (props) => {
  const [text, setText] = useState('');

  const alertme = () => {
    console.log('testing alert');
    alert('ok so far');
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

      <button onClick={() => GetVal(text)} className="text-md font-bold mt-2">
        Move Input
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex justify-start bg-green-200 h-screen ">
      <div>
        <p className="text-md font-bold m-10">
          “Tailwind CSS is the only framework that I've seen scale on large
          teams. It’s easy to customize, adapts to any design, and the build
          size is tiny.”
        </p>
      </div>
      <div>
        <TextInput />
      </div>

      <div>
        <p className="text-md font-bold m-10">
          “Tailwind CSS is the only framework that I've seen scale on large
          teams. It’s easy to customize, adapts to any design, and the build
          size is tiny.”
        </p>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('app'));

/*
 <p className="text-md font-bold">Input again </p>
<input className="h-5 mt-10" />
    <button type="button"  onClick="alertme()"> 
      click me!! 
  </button> 

*/
/*
  <h2>How to use TextField Component in ReactJS?</h2>
  <TextField
    value={name}
    label="Enter your name"
    onChange={(e) => {
      setName(e.target.value);
    }}
  />
  <h3>Your Enter Value is: {name} </h3>
</div>

// Write Javascript code!
//const appDiv = document.getElementById('app');alertme = () => {

*/

// Import stylesheets
import './style.css';

import React, { Component } from 'react';
import { render } from 'react-dom';

import { useState, useReducer, useEffect } from 'react';

// Write Javascript code!
//const appDiv = document.getElementById('app');alertme = () => {

const logme = (props) => {
  console.log(props.value);
};

const TextInput = (props) => {
  const [text, setText] = useState('');
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


*/

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Input again</p>
      <h3>Your Enter Value is: {text} </h3>
    </div>
  );
};

const App = () => {
  const alertme = () => {
    console.log('testing alert');
    alert('ok so far');
  };

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
        <input className="h-5 mt-10" />

        <button onClick={() => alertme()} className="text-md font-bold">
          Input now
        </button>

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
    <button type="button"  onClick="alertme()"> 
      click me!! 
  </button> 

*/

// Import stylesheets
import './style.css';

import React, { Component } from 'react';
import { render } from 'react-dom';

import { useState, useReducer, useEffect } from 'react';

// Write Javascript code!
//const appDiv = document.getElementById('app');alertme = () => {

const App = () => {
  const alertme = () => {
    console.log('testing alert');
    alert('ok so far');
  };

  return (
    <div className="flex justify-start bg-green-200 h-screen ">
      <div>
        <p className="text-md font-bold m-10">
          <text className="text-blue-800">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </text>
        </p>
      </div>
      <div>
        <input type="Text" className="h-5 mt-10" />

        <button onClick={alertme} className="text-md font-bold">
          {' '}
          Show stuff{' '}
        </button>
      </div>

      <div>
        <p className="text-md font-bold m-10">
          <text className="text-blue-800">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </text>
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

// Import stylesheets
import './style.css';

import React, { Component } from 'react';
import { render } from 'react-dom';

import { useState, useReducer, useEffect } from 'react';

// Write Javascript code!
//const appDiv = document.getElementById('app');

const App = () => {
  return (
    <div class="flex justify-start bg-green-200 h-screen ">
      <div>
        <p class="text-sm font-bold m-10">
          <text class="text-blue-800">
          “Tailwind CSS is the only framework that I've seen scale on large
          teams. It’s easy to customize, adapts to any design, and the build
          size is tiny.”
          </text>
        </p>
   
      </div>
      <div>
        <p class="text-sm font-bold m-10">
        <text class="text-blue-800">
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

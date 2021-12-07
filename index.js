// Import stylesheets
import './style.css';

import React, { Component } from 'react';
import { render } from 'react-dom';

// Write Javascript code!
//const appDiv = document.getElementById('app');

const App = () => {
  return (
    <div class="flex justify-start bg-green-200 h-screen ">
      <p class="text-sm font-bold m-10" >
        “Tailwind CSS is the only framework that I've seen scale on large teams.
        It’s easy to customize, adapts to any design, and the build size is
        tiny.”
      </p>
      <p class="text-sm font-bold m-10" >
        “Tailwind CSS is the only framework that I've seen scale on large teams.
        It’s easy to customize, adapts to any design, and the build size is
        tiny.”
      </p>
      
    </div>
  );
};

render(<App />, document.getElementById('app'));

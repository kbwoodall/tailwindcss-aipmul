// Import stylesheets
import './style.css';

import React, { Component } from 'react';
import { render } from 'react-dom';

// Write Javascript code!
//const appDiv = document.getElementById('app');

const App = () => {
  return (
    <div >    
      <p class="text-lg font-bold">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p> 
       
    </div>
  );
};

render(<App />, document.getElementById('app'));
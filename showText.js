import React, { Component } from 'react';
import { render } from 'react-dom';

import { useState, useReducer, useEffect } from 'react';
import { createContext, useContext } from 'react';
import { ExampleContext } from './index.js';

export const NewTextInput = () => {
  const [text, setText] = useState('');
  const valueFromContext = useContext(ExampleContext);

  const alertme = () => {
    console.log('testing alert');
    alert('Move ' + valueFromContext + '  ' + text);
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

      <button onClick={() => alertme({text})} className="text-md font-bold mt-2">
        Move Input {valueFromContext} {text}
      </button>
    </div>
  );
};

/*

import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { mydemo, formatDate, showText } from './MyUseEffect';
import './style.css';
import { useState, useReducer, useEffect } from 'react';
import { FC, ReactElement } from 'react';

const hooks = () => {
  const [count, setCount] = useState(0);
  let myObj = { msg: 'Message from hooks' };

  return (
    <div>
      {showText(myObj)}
      {formatDate()}
      <p style={{ color: 'blue' }}>You clicked {count} times first</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
const showme = (msg: string) => {
  return (
    <div>
      <p>{msg}</p>
    </div>
  );
};

const addit = (x: number, y: number) => {
  return <p>return (x*y);</p>;
};
const CStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: 800,
  //backgroundColor: 'gray'
};

const App = () => {
  return (
    <div style={CStyle}>
      <div style={{ backgroundColor: 'coral' }}>
        <p style={{ color: 'blue' }}>Hooks useState</p>
        {hooks()}
        <p style={{ color: 'blue' }}>Hooks useEffect</p>
        {UseEffect()}
      </div>

      <div style={{ backgroundColor: 'coral' }}>
        <p style={{ color: 'blue' }}>Hooks useState</p>
        {hooks()}
        <p style={{ color: 'blue' }}>Hooks useEffect</p>
        {UseEffect()}
      </div>
      <div style={{ backgroundColor: 'coral' }}>
        <p style={{ color: 'blue' }}>Hooks useState</p>
        {hooks()}
        <p style={{ color: 'blue' }}>Hooks useEffect</p>
        {UseEffect()}
      </div>
    </div>
  );
};

function UseEffect() {
  return mydemo();
}

render(<App />, document.getElementById('root'));


*/

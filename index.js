// Import stylesheets
import './style.css';

import React, { Component } from 'react';
import { render } from 'react-dom';

import { useState, useReducer, useEffect } from 'react';
import { createContext, useContext } from 'react';

const UserContext = createContext();
const GetVal = (val) => {
  alert('here ' + val);
};

const TextInput = () => {
  const [text, setText] = useState('');
  const mystuff = useContext(UserContext);

  const alertme = () => {
    console.log('testing alert');
    alert('ok so far ' + mystuff);
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
        Move Input here {mystuff}
      </button>
    </div>
  );
};

const App = () => {
  const [info, setInfo] = useState('hey there');

  return (
    <UserContext.Provider value={info}>
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
    </UserContext.Provider>
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
  /*
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { mydemo, myhooks, formatDate, showText } from './MyUseEffect';
import './style.css';
import { useState, useReducer, useEffect } from 'react';
import { FC, ReactElement } from 'react';

import { createContext, useContext } from 'react';
import ReactDOM from 'react-dom';

const hey = (msg: string) => {
  alert('ok so far ' + msg);
};

const showme = (msg: string) => {
  return (
    <div>
      <p>{msg}</p>
    </div>
  );
};

const App = () => {
  const [title, setTitle] = useState('new stuff');
  const [user, setUser] = useState('');
  const UserContext = createContext(user);
  const value2 = useContext(UserContext);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredName = event.target.value;
    setUser(enteredName);
    //alert(enteredName);
  };

  return (
    <UserContext.Provider value={user}>
      <div className="flex bg-green-400 h-screen ">
        <div className="bg-blue-200 ml-10 rounded-xl mt-10 mb-10 ml-5">
          <p className="text-lg">{showme('ok so far')}</p>
          {myhooks()}

          <p className="text-lg">Hello {user}</p>
        </div>

        <div className="text-black font-bold rounded mt-10 ml-5 mr-5">
          <div>
            <input className="mb-5" id={title} />
          </div>

          <button type="button" onClick={() => setUser(title)}>
            Show result
          </button>
        </div>
        <div className="bg-blue-200 rounded-xl mt-10 mb-10 w-4/6 mr-10">
          <p className="text-lg">{showme('Hooks useEffect')}</p>
          {mydemo()}
        </div>
      </div>
    </UserContext.Provider>
  );
};

render(<App />, document.getElementById('root'));

*/

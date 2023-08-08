import React, { useState, useEffect } from 'react';
//Author: Kerry Woodall 7/17/2022

import { Suspense, lazy } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

import { useRoutes } from 'hookrouter';
import Routes from './router';

import './style.css';
import App2 from './listapp.js';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContext, useContext } from 'react';
import { useMemo } from 'react';

const UserContext = createContext({
  userName: '',
  setUserName: () => {},
});

let tot = 0.0;
let saveName = 'initial';
let saveArray = [];
let names = [];

const UserInfo = () => {
  const { userName } = useContext(UserContext);
  return (
    <p className="bg-teal-400 text-md font-bold pl-10 pt-2 pb-2">{userName}</p>
  );
};

const handleButtonClick = () => {
  alert('Button clicked!');
};

function UserAll() {
  return (
    <div >
      <button className="bg-teal-400 text-left font-bold  pl-10 pt-2 pb-2 w-64" onClick={handleButtonClick}>All</button>
    </div>
  );
}

function UserNameInput() {
  const { userName, setUserName } = useContext(UserContext);
  const changeHandler = (event) => setUserName(event.target.value);
  return (
    <input
      className="bg-teal-200 text-md font-bold pl-10 pt-2 pb-2"
      type="text"
      value={userName}
      onChange={changeHandler}
    />
  );
}

const hdg = () => {
  return (
    <p className="bg-green-400 text-md font-bold pt-2 pb-4 w-64 pl-4">
      Total Purchases by Customer
    </p>
  );
};
function Chdg() {
  return (
    <p className="bg-green-400 text-md font-bold pt-2 pb-4 w-64 pl-4">
      My favorite Customers
    </p>
  );
}

const printall = (printList) => {
  return printList.map((items) => (
    <p className="bg-teal-400 text-md font-bold pl-10 pt-2 pb-2" key={items.id}>
      {items.customer} {items.item} {items.cost}
    </p>
  ));
};

function Totln() {
  const { userName, setUserName } = useContext(UserContext);
  if (userName === 'All') {
    return (
      <p className="bg-red-400 text-md font-bold pl-10 pt-2 pb-2">
        Total {tot}
      </p>
    );
  } else {
    return null;
  }
}

const list = [
  { id: 1, customer: 'Jim', item: 'shirt-m', cost: 112.45 },
  { id: 2, customer: 'Leo', item: 'shirt-lg', cost: 127.56 },
  {
    id: 3,
    customer: 'Terry',
    item: 'shoes',
    cost: 100.27,
  },
  {
    id: 4,
    customer: 'Terry',
    item: 'pants',
    cost: 200.36,
  },
];

function Cus() {
  {
    const { userName, setUserName } = useContext(UserContext);
    let categories = [...new Set(list.map((iname) => iname.customer))];

    console.log('cus customer set ' + categories);

    let sublist = Array.from(categories);
    console.log('cus customer array ' + sublist);
    saveArray = sublist;
    console.log('cus saveArray is ' + saveArray.length);

    return sublist.map((person) => (
      <p
        className="bg-teal-400 text-md font-bold pl-10 pt-2 pb-2"
        onClick={(event) => setUserName(person)}
      >
        {person}
      </p>
    ));
  }
}

const Listing = () => {
  const { userName, setUserName } = useContext(UserContext);
  console.log('listing ' + userName);

  console.log('list ' + list.length);
  let first = true;
  let hid = 0;
  let hcust = '';
  let hitem = '';
  let hcost = 0;
  let subtot = 0.0;
  let prev = [];
  let printList = [];
  let newList = [];
  let slist = [];

  const print = () => {
    if (userName === 'All') {
      slist = [...list];
    } else {
      slist = list.filter((person) => {
        return person.customer === userName;
      });
    }
    console.log('slist ' + slist.length + ' ' + slist);
    tot = 0;
    for (let i = 0; i < slist.length; i++) {
      tot = tot + slist[i].cost;

      if (first) {
        (first = false),
          (hcust = slist[i].customer),
          (hitem = slist[i].item),
          (hcost = slist[i].cost),
          (subtot = slist[i].cost),
          (prev = [{ id: hid++, customer: hcust, item: hitem, cost: hcost }]);
      } else {
        if (hcust == slist[i].customer) {
          printList.push(prev[0]);
          subtot = subtot + slist[i].cost;
          hcust = slist[i].customer;
          hitem = slist[i].item;
          hcost = slist[i].cost;
          prev = [{ id: hid++, customer: hcust, item: hitem, cost: hcost }];
        } else {
          printList.push(prev[0]);
          prev = [{ id: hid++, customer: hcust, item: '', cost: subtot }];
          printList.push(prev[0]);
          hcust = slist[i].customer;
          hitem = slist[i].item;
          hcost = slist[i].cost;
          prev = [{ id: hid++, customer: hcust, item: hitem, cost: hcost }];
          subtot = 0;
          subtot = subtot + slist[i].cost;
        }
      }
      if (i == slist.length - 1) {
        printList.push(prev[0]);
        prev = [{ id: hid++, customer: hcust, item: '', cost: subtot }];
        printList.push(prev[0]);
      }
    }
    return printall(printList);
  };
  return print();
};
/*
function UserNameInput() {
  const { userName, setUserName } = useContext(UserContext);
  const changeHandler = (event) => setUserName(event.target.value);
  return <input type="text" value={userName} onChange={changeHandler} />;
}
*/

const routes = {
  './routes/About': () => <Users />,
  './routes/Home': () => <About />,
};
function App() {
  const routeResult = useRoutes(routes);
  const [userName, setUserName] = useState('All');
  const value = useMemo(() => ({ userName, setUserName }), [userName]);

  return (
    <div className="flex justify-start bg-green-300 h-screen  ">
      <div>{routeResult}</div>
      <UserContext.Provider value={value}>
        <div className=" bg-green-300 flex-row">
          <div className=" mt-5 ml-5 ">
            <Chdg />
          </div>

          <div className=" mt-5 ml-5 ">
            <UserAll />
          </div>

          <div className="mt-5 ml-5 ">
            <Cus />
          </div>

          <div></div>
        </div>

        <div className=" bg-green-300 flex-row">
          <div className=" mt-5 ml-5 ">{hdg()}</div>
          <div className=" mt-5 ml-5 ">
            <Listing />
          </div>
          <div className=" mt-5 ml-5 ">
            <Totln />
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
}

render(<App />, document.getElementById('app'));

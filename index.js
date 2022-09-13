//Author: Kerry Woodall 7/17/2022
//Import stylesheets
import './style.css';

import React, { Component } from 'react';
import { render } from 'react-dom';

import { useState, useReducer, useEffect } from 'react';
import { createContext, useContext } from 'react';
import { NewTextInput } from './showText.js';
export const ExampleContext = createContext('');

let tot = 0.0;
let printList = [];

const hdg = () => {
  return (
    <p className="bg-green-400 text-md font-bold pt-2 pb-4 w-64 pl-4">
      Total Purchases by Customers
    </p>
  );
};
const chdg = () => {
  return (
    <p className="bg-green-400 text-md font-bold pt-2 pb-4 w-64 pl-4">
      Customers
    </p>
  );
};

const println = (cus, item, cst) => {
  return (
    <p className="bg-teal-400 text-md font-bold pl-10 pt-2 pb-2">
      {cus} {item} {cst}
    </p>
  );
};

const printall = (printList) => {
  return printList.map((items) => (
    <p className="bg-teal-400 text-md font-bold pl-10 pt-2 pb-2" key={items.id}>
      {items.customer} {items.item} {items.cost}
    </p>
  ));
};

const totln = (cst) => {
  return (
    <p className="bg-red-400 text-md font-bold pl-10 pt-2 pb-2">Total {cst}</p>
  );
};

const clisting = () => {
  const clist = [{ customer: 'Leo' }, { customer: 'Otto' }];

  const people = [
    { id: 1, name: 'Leo', gender: 'male', age: 30 },
    { id: 3, name: 'Otto', gender: 'male', age: 13 },
  ];

  function cus() {
    return (
      <ul>
        {people.map((person) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </ul>
    );
  }
  return cus();
};

const listing = () => {
  const list = [
    { customer: 'Leo', item: 'shirt-m', cost: 112.45 },
    { customer: 'Leo', item: 'shirt-lg', cost: 127.56 },
    {
      //id: 3,
      customer: 'Otto',
      item: 'shoes',
      cost: 100.15,
    },
    {
      //id: 4,
      customer: 'Otto',
      item: 'pants',
      cost: 200.36,
    },
  ];

  let first = true;
  let hcust = '';
  let hitem = '';
  let hcost = 0;
  let subtot = 0;
  let prev = [];

  const print = () => {
    tot = 0.0;
    for (let i = 0; i < list.length; i++) {
      tot = tot + list[i].cost;
      if (first) {
        (first = false),
          (hcust = list[i].customer),
          (hitem = list[i].item),
          (hcost = list[i].cost),
          (subtot = list[i].cost),
          (prev = [{ customer: hcust, item: hitem, cost: hcost }]);
        console.log(prev[0]);
      } else {
        if (hcust == list[i].customer) {
          printList.push(prev[0]);
          subtot = subtot + list[i].cost;
          hcust = list[i].customer;
          hitem = list[i].item;
          hcost = list[i].cost;
          prev = [{ customer: hcust, item: hitem, cost: hcost }];
        } else {
          printList.push(prev[0]);
          console.log(prev[0]);
          prev = [{ customer: hcust, item: '', cost: subtot }];
          printList.push(prev[0]);

          hcust = list[i].customer;
          hitem = list[i].item;
          hcost = list[i].cost;
          prev = [{ customer: hcust, item: hitem, cost: hcost }];

          subtot = 0;
          subtot = subtot + list[i].cost;
        }
      }
      if (i == list.length - 1) {
        printList.push(prev[0]);

        prev = [{ customer: hcust, item: '', cost: subtot }];
        printList.push(prev[0]);
      }
    }
    return printall(printList);
  };
  return print();
};

const App = () => {
  return (
    <div className="flex justify-start bg-green-300 h-screen  ">
      <div className=" bg-green-300 flex-row">
        <div className=" mt-5 ml-5 ">{chdg()}</div>
        <div className=" mt-5 ml-5 ">{clisting()}</div>
      </div>

      <div className=" bg-green-300 flex-row">
        <div className=" mt-5 ml-5 ">{hdg()}</div>
        <div className=" mt-5 ml-5 ">{listing()}</div>
        <div className=" mt-5 ml-5 ">{totln(tot)}</div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById('app'));

/*
<div className=" mt-5 ml-5 ">{totln(tot.toFixed(2))}</div>
let text = '{ "customer" : [' + '{ "item":"" , "cost":"Jones" } ]}';
  const obj = JSON.parse(text);
const printallx = (cus, item, cst) => {
  return (
    <p className="bg-teal-400 text-md font-bold pl-10 pt-2 pb-2">
      {cus} {item} {cst}
    </p>
  );
};

const GetVal = (v1, v2, v3, v4) => {
  console.log('hold values ' + v1, v2, v3, v4);
};

GetVal(
      printList[0].customer,
      printList[1].customer,
      printList[2].customer,
      printList[3].customer
    );

const GetVal = (val) => {
  alert('testing now' + val);
};

  const itemlist = newlist.map((items) => (
    <p key={items.id}>
      {items.customer} {items.item} {items.cost}
    </p>
  ));
  
  //const mystuff = useContext(ExampleContext);


//return <p>Total purchases by Customer again {hcust}</p>;
  const print = () => {
    const printtotal = () => {
      <p>{tot}</p>;
      const printitems = () => {
        let listitems = list.map((items) => (
          <p>
            {items.customer} {items.item} {items.cost}
          </p>
        ));
        return listitems;
      };
      return printitems();
    };

    return printtotal();
  };
*/

//return tot;

/*
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
      <p className="bg-teal-400 text-md font-bold pl-10 pt-5">
        “Parse formula "
      </p>

      <p className="text-md font-bold pl-10 pt-5">{fromContext}</p>
      <p className="text-md font-bold pl-10 pt-5 pb-5">x = {result(text)}</p>
    </div>
  );
};

const RightSide = () => {
  const fromContext = useContext(ExampleContext);
  return (
    <div className="w-64 ml-4 border-dashed border-4 border-black bg-teal-400 mt-10 mr-4">
      <p className="bg-teal-400 text-md font-bold m-10 ">“Changes ”</p>
      <p className="text-md font-bold m-10">{fromContext}</p>
    </div>
  );
};


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

          <div>
          <MiddleSide />
        </div>

        <div>
          <RightSide />
        </div>

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

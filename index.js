import React, { useState, useEffect } from 'react';
//Author: Kerry Woodall 7/17/2022

import './style.css';
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

function UserNameInput() {
  const { userName, setUserName } = useContext(UserContext);
  const changeHandler = (event) => setUserName(event.target.value);
  return (
    <input
      className="bg-teal-400 text-md font-bold pl-10 pt-2 pb-2"
      type="text"
      value={userName}
      onChange={changeHandler}
    />
  );
}

function handleClickx() {
  const { userName, setUserName } = useContext(UserContext);
  const changeHandler = (event) => setUserName(event.target.value);
  return <input type="text" value={userName} onChange={changeHandler} />;
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
      Customers
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
  return (
    <p className="bg-red-400 text-md font-bold pl-10 pt-2 pb-2">Total {tot}</p>
  );
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

function handleClickx() {
  const { userName, setUserName } = useContext(UserContext);
  const changeHandler = (event) => setUserName(event.target.value);
  return <input type="text" value={userName} onChange={changeHandler} />;
}

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

const clisting = () => {
  const handleClick = (person) => {
    console.log('selected name click value', person);

    return (
      <UserContext.Consumer>{(value) => <p>{value}</p>}</UserContext.Consumer>
    );
  };

  function cusx() {
    {
      let categories = [...new Set(list.map((iname) => iname.customer))];

      console.log('cus customer set ' + categories);

      let sublist = Array.from(categories);
      console.log('cus customer array ' + sublist);
      saveArray = sublist;
      console.log('cus saveArray is ' + saveArray.length);

      return sublist.map((person) => (
        <p
          className="bg-teal-400 text-md font-bold pl-10 pt-2 pb-2"
          onClick={(event) => handleClick(person)}
        >
          {person}
        </p>
      ));
    }
  }

  return cus();
};

const Listing = () => {
  const { userName } = useContext(UserContext);
  console.log('listing ' + userName);

  useEffect(() => {
    let slist = [];
    slist = list.filter((person) => {
      return person.customer === userName;
    });
    console.log('Listing useEffect ' + slist.length + ' ' + slist);
    console.log('test ' + list);
  });

  let first = true;
  let hid = 0;
  let hcust = '';
  let hitem = '';
  let hcost = 0;
  let subtot = 0.0;
  let prev = [];
  let printList = [];
  let newList = [];

  const print = () => {
    tot = 0;
    for (let i = 0; i < list.length; i++) {
      tot = tot + list[i].cost;

      console.log(tot);

      if (first) {
        (first = false),
          (hcust = list[i].customer),
          (hitem = list[i].item),
          (hcost = list[i].cost),
          (subtot = list[i].cost),
          (prev = [{ id: hid++, customer: hcust, item: hitem, cost: hcost }]);
      } else {
        if (hcust == list[i].customer) {
          printList.push(prev[0]);
          subtot = subtot + list[i].cost;
          hcust = list[i].customer;
          hitem = list[i].item;
          hcost = list[i].cost;
          prev = [{ id: hid++, customer: hcust, item: hitem, cost: hcost }];
        } else {
          printList.push(prev[0]);
          prev = [{ id: hid++, customer: hcust, item: '', cost: subtot }];
          printList.push(prev[0]);
          hcust = list[i].customer;
          hitem = list[i].item;
          hcost = list[i].cost;
          prev = [{ id: hid++, customer: hcust, item: hitem, cost: hcost }];
          subtot = 0;
          subtot = subtot + list[i].cost;
        }
      }
      if (i == list.length - 1) {
        printList.push(prev[0]);
        prev = [{ id: hid++, customer: hcust, item: '', cost: subtot }];
        printList.push(prev[0]);
      }
    }
    return printall(printList);
  };
  return print();
};

function UserNameInput() {
  const { userName, setUserName } = useContext(UserContext);
  const changeHandler = (event) => setUserName(event.target.value);
  return <input type="text" value={userName} onChange={changeHandler} />;
}

const App = () => {
  const [userName, setUserName] = useState('Jim');
  const value = useMemo(() => ({ userName, setUserName }), [userName]);

  return (
    <div className="flex justify-start bg-green-300 h-screen  ">
      <UserContext.Provider value={value}>
        <div className=" bg-green-300 flex-row">
          <div className=" mt-5 ml-5 ">{hdg()}</div>

          <div className=" mt-5 ml-5 ">
            <UserNameInput />
          </div>

          <div className=" mt-5 ml-5 ">
            <UserInfo />
          </div>
          <div className="mt-5 ml-5 ">
            <Cus />
          </div>
        </div>

        <div className=" bg-green-300 flex-row">
          <div className=" mt-5 ml-5 ">
            <Chdg />
          </div>
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
};

render(<App />, document.getElementById('app'));

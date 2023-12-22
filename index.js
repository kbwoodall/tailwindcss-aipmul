import React, { useState, useEffect } from 'react';
//Author: Kerry Woodall 7/17/2022

import { Suspense, lazy } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

import { useRoutes } from 'hookrouter';
import Routes from './router';

import './style.css';
//import List2 from './listmore';
//import App2 from './listapp.js';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContext, useContext } from 'react';
import { useMemo } from 'react';

const UserContext = createContext({});

let tot = 0.0;
let saveName = 'initial';
let saveArray = [];
let names = [];

const UserInfo = () => {
  const { userName, imageNbr } = useContext(UserContext);
  console.log('UserInfo ' + imageNbr + ' ' + userName);
  return (
    <p className="bg-teal-400 text-md font-bold pl-10 pt-2 pb-2 ">{userName}</p>
  );
};

const handleButtonClick = () => {
  alert('Button clicked!');
};

function UserAll() {
  const { userName, setUserName, imageNbr, setImageNbr } =
    useContext(UserContext);
  const changeHandler = (event) => setUserName('All');

  //<div onClick={onClick}  className="bg-green-300"> {item} </div>

  console.log('UserInfo ' + imageNbr + ' ' + userName);

  return (
    <div>
      <button
        className="bg-teal-400 text-left font-bold  pl-10 pt-2 pb-2 w-64 "
        onClick={changeHandler}
      >
        All
      </button>
    </div>
  );
}

function UserNameInput() {
  const { userName, setUserName } = useContext(UserContext);
  const { imageNbr, setImageNbr } = useContext(UserContext);

  setImageNbr = 1;

  const changeHandler = (event) => setUserName(event.target.value);
  return (
    <input
      className="bg-teal-200 text-md font-bold focus:bg-teal-200  "
      type="text"
      value={userName}
      onChange={changeHandler}
    />
  );
}

const Itemdesc = () => {
  return (
    <img
      class="flex justify-center items-center  pt-6 w-64"
      src="https://stackblitz.com/files/tailwindcss-aipmul/github/kbwoodall/tailwindcss-aipmul/main/golfPants.jpg"
    />
  );
};

const hdg = () => {
  return (
    <p className="bg-green-400 text-md font-bold pt-2 w-64 pl-2 pb-4">
      Total Purchases by Customer
    </p>
  );
};

function Ihdg() {
  return (
    <p className="bg-green-400 text-md font-bold pt-2 w-64 pl-4 pb-4">
      Item Description
    </p>
  );
}

function Chdg() {
  return (
    <p className="bg-green-400 text-md font-bold pt-2 pb-4 w-64 pl-4">
      My favorite Customers
    </p>
  );
}

const printall = (printList) => {
  const { userName, setUserName, imageNbr, setImageNbr } =
    useContext(UserContext);

  return printList.map((items) => (
    //alert('hey ' + items.customer + ' ' + items.id + ' ' + items.itempic);

    <p
      className="bg-teal-400 text-md font-bold pl-10 pt-2 pb-2"
      key={items.id}
      onClick={(event) => {
        //alert('hey ' + items.customer + ' ' + items.id + ' ' + items.itempic);
        if (isNaN(items.itempic)) {
          setImageNbr(1);
          console.log('NOT A NUMBER');
        } else {
          setImageNbr(items.itempic);
          console.log('IS A NUMBER');
        }
      }}
    >
      {items.customer} {items.item} {items.cost}
    </p>
  ));
};
//setImageNbr(1);
function Totln() {
  const { userName, setUserName, imageNbr, setImageNbr } =
    useContext(UserContext);
  if (userName === 'All') {
    setImageNbr(1);
    {
      return (
        <p className="bg-red-400 text-md font-bold pl-10 pt-2 pb-2">
          Total {tot}
        </p>
      );
    }
  } else {
    return null;
  }
}

const list = [
  { id: 1, customer: 'Antoinette', item: 'shirt-m', cost: 112.45, itempic: 4 },
  { id: 2, customer: 'Nick', item: 'shirt-lg', cost: 127.56, itempic: 4 },
  {
    id: 3,
    customer: 'Shelly',
    item: 'shoes',
    cost: 100.27,
    itempic: 2,
  },
  {
    id: 4,
    customer: 'Shelly',
    item: 'pants',
    cost: 200.36,
    itempic: 3,
  },
];

function Cus() {
  {
    const { userName, setUserName, imageNbr, setImageNbr, indx, setIndx } =
      useContext(UserContext);
    //const { indx, setIndx } = useContext(UserContext);

    //setIndx(0);

    let categories = [...new Set(list.map((iname) => iname.customer))];

    console.log('cus customer set ' + categories);

    let sublist = Array.from(categories);
    console.log('cus customer array ' + sublist);
    saveArray = sublist;
    console.log('cus saveArray is ' + saveArray.length);

    const lastIndex = 0;

    const Chgitx = () => {
      //alert('person ' );
      return <div className="bg-teal-400 mr-2 pl-2">{userName}</div>;
      //return <div className="bg-teal-400 mr-2 pl-2">{person}</div>;
    };

    function Chgit(props) {
      //return <h1>Hello, {props. name}</h1>;
      console.log('index in Chgit  xxxxxxxxxxx ' + props.name);
      return null;
      //return <p className="bg-teal-200 mr-2 pl-2">xxxxx{props}</p>;
    }

    function Welcome(props) {
      //return <h1>Hello, {props. name}</h1>;
      console.log('name is ' + props.name);
      //console.log('index is ' + indx);

      return <p className="bg-teal-200 mr-2 pl-2">{props.name}</p>;
    }

    const Welcomex = ({ imageUrl, imageText }) => (
      <div className="img-with-text">
        <p className="txt">{imageText}</p>
      </div>
    );

    const ImageText = ({ imageUrl, imageText }) => (
      <div className="img-with-text">
        <p className="txt">{imageText}</p>
      </div>
    );

    const IndexInfo = () => {
      const { indx, setIndx } = useContext(UserContext);
      alert(indx);
      console.log('IndexInfo ' + indx);
    };

    return sublist.map((person, index) => (
      <p
        className="bg-teal-400 text-md font-bold pl-2 pt-2 pb-2"
        key={index}
        onClick={(event) => {
          setUserName(person), setImageNbr(1), setIndx(index);
          console.log('click lastIndex1 ' + index + indx + imageNbr);
          //lastIndex = index;

          console.log('click lastIndex2 ' + lastIndex);
          <IndexInfo />;
        }}
      >
        <Welcome name={(person, index)} />
      </p>
    ));
  }
}

// {<p className="bg-teal-200 mr-2 pl-2">{person}</p>}

const Listing = () => {
  const { userName, setUserName, imageNbr, setImageNbr } =
    useContext(UserContext);
  console.log('listing ' + userName);

  console.log('list ' + list.length);
  let first = true;
  let hid = 0;
  let hcust = '';
  let hitem = '';
  let hcost = 0;
  let hitempic = 1;
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
          (hitempic = slist[i].itempic),
          (hcost = slist[i].cost),
          (subtot = slist[i].cost),
          (hitempic = slist[i].itempic),
          (prev = [
            {
              id: hid++,
              customer: hcust,
              item: hitem,
              cost: hcost,
              itempic: hitempic,
            },
          ]);
      } else {
        if (hcust == slist[i].customer) {
          printList.push(prev[0]);
          subtot = subtot + slist[i].cost;
          hcust = slist[i].customer;
          hitem = slist[i].item;
          hcost = slist[i].cost;
          hitempic = slist[i].itempic;
          prev = [
            {
              id: hid++,
              customer: hcust,
              item: hitem,
              cost: hcost,
              itempic: hitempic,
            },
          ];
        } else {
          printList.push(prev[0]);
          prev = [{ id: hid++, customer: hcust, item: '', cost: subtot }];
          printList.push(prev[0]);
          hcust = slist[i].customer;
          hitem = slist[i].item;
          hcost = slist[i].cost;
          hitempic = slist[i].itempic;
          prev = [
            {
              id: hid++,
              customer: hcust,
              item: hitem,
              cost: hcost,
              itempic: hitempic,
            },
          ];
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

const routes = {
  './routes/About': () => <Users />,
  './routes/Home': () => <About />,
};

//------------------------------------------------------------------

const List2 = () => {
  const { userName, setUserName, imageNbr, setImageNbr } =
    useContext(UserContext);

  console.log('List2 listing ' + userName + ' ' + imageNbr);

  const pic1 =
    'https://stackblitz.com/files/tailwindcss-aipmul/github/kbwoodall/tailwindcss-aipmul/main/bird.png';

  const pic2 =
    'https://stackblitz.com/files/tailwindcss-aipmul/github/kbwoodall/tailwindcss-aipmul/main/golfPants.jpg';

  const pic3 =
    'https://stackblitz.com/files/tailwindcss-aipmul/github/kbwoodall/tailwindcss-aipmul/main/justPants.jpg';

  const pic4 =
    'https://stackblitz.com/files/tailwindcss-aipmul/github/kbwoodall/tailwindcss-aipmul/main/golfShirt.jpg';

  const nlist = [
    { keyn: 1, value: pic1 },
    { keyn: 2, value: pic2 },
    { keyn: 3, value: pic3 },
    { keyn: 4, value: pic4 },
  ];

  const param = imageNbr;

  const specificValuesFromArray = nlist.filter((obj) => obj.keyn === param);

  const testObj = specificValuesFromArray[0].value;

  return (
    <div className="bg-gray-100 mt-6">
      <img className="flex justify-center items-center  w-64" src={testObj} />
    </div>
  );
};

function App() {
  const routeResult = useRoutes(routes);
  const [userName, setUserName] = useState('All');

  const [imageNbr, setImageNbr] = useState(1);
  const [indx, setIndx] = useState(0);

  const value = useMemo(() => ({ userName, setUserName }), [userName]);

  const value2 = {
    userName,
    setUserName,
    imageNbr,
    setImageNbr,
    indx,
    setIndx,
  };

  const value1 = () => ({ userName, setUserName, imageNbr });
  console.log('App ' + userName + ' ' + imageNbr);

  return (
    <div className="flex justify-start bg-green-300 h-screen  ">
      <div>{routeResult}</div>

      <UserContext.Provider value={value2}>
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
        <div className=" mt-5 ml-5 ">
          <Ihdg />
          <div>
            <List2 picNbr={userName} />
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
}

render(<App />, document.getElementById('app'));

//const param = Number(props.picNbr);

//console.log('List2 props ' + props.picNbr);

//const { userName, setUserName } = useContext(UserContext);
//console.log('listing List2' + userName);

/*
function UserNameInput() {
  const { userName, setUserName } = useContext(UserContext);
  const changeHandler = (event) => setUserName(event.target.value);
  return <input type="text" value={userName} onChange={changeHandler} />;
}
return <p className=" text-md font-bold pt-2 b-4 w-64 pl-4">Empty photo</p>;
<div className=" mt-5 ml-5 ">
          <itemdesc />
        </div>

         return <img src="https://github.com/kbwoodall/tailwindcss-aipmul/tree/main/golfPants.jpg"/>;
*/

//<AppContext.Provider value={{ userName, setUserName, imageNbr, setImageNbr }}>

//<UserContext.Provider value={value}>

//userName: '',
//setUserName: () => {},
//imageNbr: '2',
//setImageNbr: () => {},
/*
function SetImageMore(param) {
  const { userName, setUserName, imageNbr, setImageNbr } =
    useContext(UserContext);
  //const changeHandler = () => setImageNbr(1);

  console.log('param ' + param);
  //setImageNbr(param);

  //return alert('hey ' + items.customer + ' ' + items.id + ' ' + items.itempic);

  return null;
}

function SetImage(items) {
  //const { userName, setUserName, imageNbr, setImageNbr } =
  //useContext(UserContext);
  //const changeHandler = () => setImageNbr(1);

  alert('hey ' + items.customer + ' ' + items.id + ' ' + items.itempic);
  //SetImageMore(items.itempic);
  //return null
}
*/

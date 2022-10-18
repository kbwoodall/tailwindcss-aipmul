import React, { useState, useEffect } from 'react';
//Author: Kerry Woodall 7/17/2022

import './style.css';

import React, { Component } from 'react';
import { render } from 'react-dom';

import { useState, useReducer, useEffect } from 'react';
import { createContext, useContext } from 'react';
import { NewTextInput } from './showText.js';

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
  const changeHandler = event => setUserName(event.target.value);
  return (
    <input className="bg-teal-400 text-md font-bold pl-10 pt-2 pb-2"
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
const chdg = () => {
  return (
    <p className="bg-green-400 text-md font-bold pt-2 pb-4 w-64 pl-4">
      Customers
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

const list = [
  { id: 1, customer: 'Jim', item: 'shirt-m', cost: 112.45 },
  { id: 2, customer: 'Leo', item: 'shirt-lg', cost: 127.56 },
  {
    id: 3,
    customer: 'Terry',
    item: 'shoes',
    cost: 100.15,
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

const clisting = () => {
  //const [name, setName] = useState('initial');
  //const user = React.useContext(UserContext);
  //console.log('clisting value ' + user);

  //const user = React.useContext(UserContext);
  //console.log('clisting value ' + user);
  /*
  useEffect(() => {
    saveArray = list.filter((person) => {
      return person.customer === 'saveName';
    });
    console.log('handleClick useEffect ' + saveArray.length + ' ' + saveArray);
  }, [saveArray]);
  */
  //const value = React.useContext(UserContext);
  /*
  const [name, setName] = useState('initial');

  console.log('clisting function ' + name);
  useEffect(() => {
    //setName(person);
    console.log('handleClick useEffect ' + name);
  }, []);
*/

  //});
  //  }, [name]);

  const handleClick = (person) => {
    //setName(person);
    //saveName = person;

    console.log('selected name click value', person);
    //const value = 'My Context Value';

    return (
      <UserContext.Consumer>{(value) => <p>{value}</p>}</UserContext.Consumer>
    );

    //saveName = person;
    //setName(saveName);

    //const value = React.useContext(person);

    //console.log('selected array click ', saveArray);
    //console.log('selected saveName click ', name);
    /*
    alert('Selected ' + val);
    alert('Selected ' + n);
    saveArray = list.filter((val) => {
      return val.customer === saveName;
    });

    if (saveArray.length > 0) {
      console.log(
        'saveArray test is ' + saveArray.length + ' ' + saveArray[0].customer
      );
      //setName(saveArray[0].customer);
      //console.log(name);
    }
    */
  };

  function cus() {
    {
      //const user = React.useContext(UserContext);
      //setName('kkkk')
      //console.log('cus value ' + user);
      //const user = React.useContext(UserContext);
      //console.log('cus value ' + user);

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

//  onClick={() => setCurrency(CURRENCIES.Euro)}
//onClick={(event) => handleClick(setName(person))}

const listing = () => {
  //const [name, setName] = useState(saveName);
  const user = React.useContext(UserContext);
  console.log('listing value ' + user);

  console.log('listing saveName ' + saveName);
  //console.log('listing saveArray ' + list);

  //const currency = React.useContext(CurrencyContext);

  let first = true;
  let hid = 0;
  let hcust = '';
  let hitem = '';
  let hcost = 0;
  let subtot = 0.0;
  let prev = [];
  let printList = [];
  let newList = [];
  /*
  useEffect(() => {
    sameArray = list.filter((person) => {
      return person.customer === 'saveName';
    });
    console.log('copy in useEffect ' + newList.length + ' ' + newList);
  }, [saveArray]);
  
  const filtered = list.filter((person) => {
    return person.customer === saveName;
  });
  console.log('purchase list size ' + filtered.length);
  */
  //list = [...saveArray]
  //console.log('copy in listing ' + saveArray.length);

  const print = () => {
    tot = 0;
    for (let i = 0; i < list.length; i++) {
      tot = tot + list[i].cost;
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
  const [userName, setUserName] = useState('John Smith');
  const value = useMemo(() => ({ userName, setUserName }), [userName]);

  return (
    <div className="flex justify-start bg-green-300 h-screen  ">
      <UserContext.Provider value={value}>
        <div className=" bg-green-300 flex-row">
          <div className=" mt-5 ml-5 ">{hdg()}</div>

          <div className=" mt-5 ml-5 ">
            <UserInfo />

            <UserNameInput/>
          </div>
          <div className="mt-5 ml-5 ">{clisting(list)}</div>
        </div>

        <div className=" bg-green-300 flex-row">
          <div className=" mt-5 ml-5 ">{hdg()}</div>
          <div className=" mt-5 ml-5 ">{listing(list)}</div>
          <div className=" mt-5 ml-5 ">{totln(tot)}</div>
        </div>
      </UserContext.Provider>
    </div>
  );
};

render(<App />, document.getElementById('app'));

/*

import { createContext, useState, useContext, useMemo } from 'react';
const UserContext = createContext({
  userName: '',
  setUserName: () => {},
});
function Application() {
  const [userName, setUserName] = useState('John Smith');
  const value = useMemo(
    () => ({ userName, setUserName }), 
    [userName]
  );
  
  return (
    <UserContext.Provider value={value}>
      <UserNameInput />
      <UserInfo />
    </UserContext.Provider>
  );
}
function UserNameInput() {
  const { userName, setUserName } = useContext(UserContext);
  const changeHandler = event => setUserName(event.target.value);
  return (
    <input
      type="text"
      value={userName}
      onChange={changeHandler}
    />
  );
}
function UserInfo() {
  const { userName } = useContext(UserContext);
  return <span>{userName}</span>;
}

import { createContext } from "react";

const Context = createContext("Default Value");

export function Main() {
  const value = "My Context Value";

  return (
    <Context.Provider value={value}>
      <MyComponent />
    </Context.Provider>
  );
}

function MyComponent() {
  return <Context.Consumer>{(value) => <span>{value}</span>}</Context.Consumer>;
}

 <div className=" mt-5 ml-5 ">{listing(list)}</div>


 //const [count, setCount] = useState(0);
function GetArray() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    saveArray = list.filter((person) => {
      return person.customer === saveName;
    });
  }, [saveArray]);
  console.log('GetArray is ' + saveArray.length);
}
 //const [user, setUser] = useState(saveName);
  function Lista(listb) {
    const numbers = [0, 1, 2, 3, 4, 4];

    return (
      <ul>
        {listb.map((n, i) => (
          <li key={i}> {n} </li>
        ))}
      </ul>
    );
  }
const smallList = (name) => {
  let categories = [...new Set(list.map((iname) => iname.customer))];
  console.log('purchase list ' + categories);

  return categories;
};

  //const filtered = list.filter((person) => {
      //  return person.customer === saveName;
      //});
      //console.log('purhase list size ' + list.length);

  //const people = [
  //   { id: 1, name: 'Leo', gender: 'male', age: 30 },
  //   { id: 2, name: 'Terry', gender: 'male', age: 13 },
  // ];

  //const [user, setUser] = useState('not ready');
  //const user = useContext(UserContext);
  //const UserContext = createContext();
  //const UserContext = React.createContext();
  //export const ExampleContext = createContext('');
const println = (cus, item, cst) => {
  return (
    <p className="bg-teal-400 text-md font-bold pl-10 pt-2 pb-2">
      {cus} {item} {cst}
    </p>
  );
};

//const UserContext = createContext();
//const UserContext = React.createContext();
//export const ExampleContext = createContext('');

//const UserContext = createContext();
//const UserContext = React.createContext();
//export const ExampleContext = createContext('');

function Component1() {
  const [user, setUser] = useState('Jesse Hall');

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
}

function Example() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {    // Update the document title using the browser API    document.title = `You clicked ${count} times`;  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
 
      return list.map((person, index) => (
        <p
          className="bg-teal-400 text-md font-bold pl-10 pt-2 pb-2"
          key={index}
          onClick={(event) => handleClick(person, index)}
        >
          {person.customer}
        </p>
      ));

 
  const handleClick = (event, index) => {
    //console.log(event.target);
    console.log('key index: ', index);
    //console.log('person ', person.name);
    saveName = index;
    alert('save name: ' + saveName);
  };


  {arr.map((element, key) => (
    <div onClick={event => handleClick(event, key)} key={key}>
      {element}
      <hr />


  onClick={(event) => handleClick(event, index)}
        key={index}
        className="bg-teal-400 text-md font-bold pl-10 pt-2 pb-2"
        key={index}
      >
        {people.name}

 {arr.map((element, key) => (
        <p onClick={event => handleClick(event, key)} key={key}>
          {element}
          <hr />
        </p>
      ))}





<div className=" mt-5 ml-5 ">{clisting()}</div>

//console.log(prev[0]);

const listing3 = () => {
  let first = true;
  let hid = 0;
  let hcust = '';
  let hitem = '';
  let hcost = 0;
  let subtot = 0;
  let prev = [];

  const print = () => {
    tot = 0.0;

    const list = [
      { id: 1, customer: 'Leo', item: 'shirt-m', cost: 112.45 },
      { id: 2, customer: 'Leo', item: 'shirt-lg', cost: 127.56 },
      {
        id: 3,
        customer: 'Otto',
        item: 'shoes',
        cost: 100.15,
      },
      {
        id: 4,
        customer: 'Otto',
        item: 'pants',
        cost: 200.36,
      },
    ];

    for (let i = 0; i < list.length; i++) {
      tot = tot + list[i].cost;
      if (first) {
        (first = false),
          (hcust = list[i].customer),
          (hitem = list[i].item),
          (hcost = list[i].cost),
          (subtot = list[i].cost),
          (prev = [{ id: hid++, customer: hcust, item: hitem, cost: hcost }]);
        console.log('first ' + prev[0].id);
        console.log('first ' + prev[0].customer);
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
          console.log(prev[0]);
          prev = [{ id: hid++, customer: hcust, item: '', cost: subtot }];
          printList.push(prev[0]);
          hcust = list[i].customer;
          hitem = list[i].item;
          hcost = list[i].cost;
          prev = [{ id: hid++, customer: hcust, item: hitem, cost: hcost }];
          subtot = 0;
          subtot = subtot + list[i].cost;
        }
        /*
        if (hcust == list[i].customer) {
          printList.push(prev[0]);
          subtot = subtot + list[i].cost;
          hcust = list[i].customer;
          hitem = list[i].item;
          hcost = list[i].cost;
          prev = [{ id: hid++, customer: hcust, item: hitem, cost: hcost }];
          console.log('same ' + prev[0].id);
          console.log('same ' + prev[0].customer);
        } else {
          printList.push(prev[0]);
          prev = [{ id: hid++, customer: hcust, item: '', cost: subtot }];
          printList.push(prev[0]);
          console.log('sub tot ' + prev[0].id);
          console.log('sub tot ' + prev[0].customer);
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
        console.log('sub tot ' + prev[0].id);
        console.log('sub tot ' + prev[0].customer);
      }
    }
    return printall(printList);
  };
  return print();
};



/*
const listing = () => {

  let first = true;
  let hid = 0;
  let hcust = '';
  let hitem = '';
  let hcost = 0;
  let subtot = 0.00;
  let prev = [];
  let printList = [];

  const print = () => {
    tot = 0;
    for (let i = 0; i < list.length; i++) {
      tot = tot + list[i].cost;
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
          console.log(prev[0]);
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



const names = ['James', 'John', 'Paul', 'Ringo', 'George'];

function App() {
  return (
    <div>
      {names.filter(name => name.includes('J')).map(filteredName => (
        <li>
          {filteredName}
        </li>
      ))}
    </div>
  );
}


    return (
      <div>
        {people.map((element, key) => (
          <div onClick={event => handleClick(event, key)} key={key}>
            {element}
            <hr />
          </div>
        ))}
      </div>
    );
    

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

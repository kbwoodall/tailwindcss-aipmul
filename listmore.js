import React from 'react';
import { createContext, useContext } from 'react';
const UserContext = createContext({
  userName: '',
  setUserName: () => {},
});

const List2 = (props) => {
  console.log('List2 props ' + props.picNbr);

  const { userName, setUserName } = useContext(UserContext);
  console.log('listing ' + userName);

  const pic1 =
    'https://stackblitz.com/files/tailwindcss-aipmul/github/kbwoodall/tailwindcss-aipmul/main/bird.png';

  const pic2 =
    'https://stackblitz.com/files/tailwindcss-aipmul/github/kbwoodall/tailwindcss-aipmul/main/golfPants.jpg';

  const nlist = [
    { keyn: 1, value: pic1 },
    { keyn: 2, value: pic2 },
  ];

  const param = Number(props.picNbr);

  const specificValuesFromArray = nlist.filter((obj) => obj.keyn === param);

  const testObj = specificValuesFromArray[0].value;

  console.log(testObj);

  return (
    <div className="bg-gray-100 mt-6">
      <img className="flex justify-center items-center  w-64" src={testObj} />
    </div>
  );
};

export default List2;

/*

const testObj = nlist[param].value;

  const index = nlist.findIndex((el) => el.key == 2);

  const testReturn = nlist.find.name;
  console.log('xxx ' + index);

// defining an array
let languages = ["JavaScript", "Java", "C"];

// checking whether the array contains 'Java'
let check = languages.includes("Java");


console.log(check); 


const employees = [
    { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
    { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
    { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
    { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];

// calculate the net amount to be given to the employees
const calcAmt = (obj) => {
    newObj = {};
    newObj.name = obj.name;
    newObj.netEarning = obj.salary + obj.bonus - obj.tax;
    return newObj;
};

let newArr = employees.map(calcAmt);

console.log(newArr);




   //{items.map((item, index) => (
      //  <img key={index} className="p-2">
      //    {item}
      //  </img>
      //))}
return (
    <ul className="bg-gray-100 p-4">
      {items.map((item, index) => (
        <li key={index} className="p-2">
          {item}
        </li>
      ))}
    </ul>
  );

*/

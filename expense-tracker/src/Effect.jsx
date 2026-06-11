import React, { useEffect, useState } from "react";

//counter

// const Effect = () => {
//   const [count,setCount] = useState(0);
//   useEffect(() => {
//     document.title = `Count : ${count}`;
//     console.log(count);
//   },[count]);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count+1)}><h1>+</h1></button>
//     </div>
//   )
// }

//Timer using setinterval

// const Effect = () => {
//   const [sec,setSec] = useState(0);
//   useEffect(() => {
//     document.title = `Timer : ${sec}`;
//     const interval = setInterval(() => (setSec(sec+1)) , 1000);
//     return () => (clearInterval(interval));
//   },[sec]);
//   return (
//     <div>
//       <h1> Second :{sec}</h1>
//     </div>
//   )
// }

// Window Width Tracker

// const Effect = () => {
//   const [width,setwidth] = useState(window.innerWidth);
//   const handleResize = () => {
//     setwidth(window.innerWidth);
//   }
//   useEffect(() => {
//     document.title = `Width : ${width}`;
//     window.addEventListener("resize",handleResize);
//     return () => (window.removeEventListener("resize",handleResize));
//   },[width]);
//   return (
//     <div>
//       <h1> Window Width Tracker</h1>
//       <h1>Width :{width}</h1>
//     </div>
//   )
// }

//User Api

const Effect = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
  },[]);
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.id}  {user.name}</li>
      ))}
    </ul>
  );
};

export default Effect;

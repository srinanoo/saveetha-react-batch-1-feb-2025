import { useEffect, useRef, useState } from 'react'
import './App.css'
import AboutComp from './components/AboutComp'
import FooterComp from './components/FooterComp'
import HeaderComp from './components/HeaderComp'
import ProjectsComp from './components/ProjectsComps'
// import Child1 from './Function1'
import { Child1, Child2 } from './Function1'
import { Nest1 } from './Function2'

// export default function App() {
//   let num = 10;
//   let str = "String";
//   let bool = false;
//   let arr = ["menu 1", "menu 2", "menu 3", "menu 4", "menu 5"];
//   let obj = {
//     "name": "Name 1",
//     "age": 10
//   }
//   let menuArr = [];
//   for(let i = 0; i < arr.length; i++) {
//     menuArr.push(<li key={i}>{arr[i]}</li>);
//   }
//   console.log(menuArr);
//   return (
//     <>
//       <p>Number: {num}</p>
//       <p>String: {str}</p>
//       {/* <p>Boolean: {bool.toString()}</p> */}
//       <p>Array: {arr}</p>
//       <p>Obj: {obj.name}, {obj.age}</p>
//       <ul>
//         {
//           arr.map((v, i) => {
//             return (
//               <li key={i}>{v}</li>
//             )
//           })
//         }
//       </ul>
//       {/* <ul>
//         {menuArr}
//       </ul> */}
//     </>
//   )
// }

// export default App;

// export default function App() {
//   let flag = false;
//   let showNest = true;
//   return (
//     <>
//       {
//         flag
//         ?
//           <>
//             <Child1 />
//             <Child2 />
//           </>
//         :
//           showNest
//             ?
//               <Nest1 />
//             :
//               <p>NO CODE TO SHOW</p>

//         // flag && <Child1 />
//       }

      
//     </>
//   )
// }

// export default function App() {
//   // let name = "Dinesh";
//   // let age = 20;
//   let flag = false;
//   let arr = [1,2,3,4];
//   let obj = {
//     "id": 1,
//     "employee": "Employee 1"
//   }
//   return (
//     <>
//       <Child1 name="Dinesh" age={40} obj={obj} />

//       <Child2 name="Dinesh" age={40} obj={obj} />
//     </>
//   )
// }

// export default function App() {
//   return (
//     <>
//       <HeaderComp />
//       <ProjectsComp />
//       <AboutComp />
//       <FooterComp />
//     </>
//   )
// }

// export default function App() {
//   let a = 10;

//   let [num, setNum] = useState(0);
//   const [name, setName] = useState(localStorage.getItem("name"));

//   const handleClick = () => {
//     console.log(a);
//     a = 20;
//     setNum(20);
//     console.log(a);
//   }

//   console.log("render...");
//   return (
//     <>
//       <p>Number: {a}</p>
//       <p>Number: {num}</p>
//       <p>Name: {name}</p>

//       <button onClick={handleClick}>Click</button>
//     </>
//   )
// }

// export default function App() {
//   const [logged, setLogged] = useState(false);

//   // const handleLogin = () => {
//   //   setLogged(true);
//   // }
//   // const handleLogout = () => {
//   //   setLogged(false);
//   // }

//   const handleLogin = () => {
//     // setLogged((logged) => !logged);
//     setLogged(!logged);
//   }
//   return (
//     <>
//       {
//         logged
//           ?
//             <>
//               <p>Please Logout</p>
//               {/* <button onClick={handleLogin}>Logout</button> */}.
//               <button onClick={() => setLogged(!logged)}>Logout</button>
//             </>
//           :
//             <>
//               <p>Please Login</p>
//               {/* <button onClick={handleLogin}>Login</button> */}
//               <button onClick={() => setLogged(!logged)}>Login</button>
//             </>
//       }

//     </>
//   )
// }

// export default function App() {
//   const usernameRef = useRef("");
//   const passwordRef = useRef("");

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleImpureComp = () => {
//     let username = document.getElementById('username').value;
//     let password = document.getElementById('password').value;
//     console.log(username, password);
//   }
//   const handleHalfImpureComp = () => {
//     console.log(usernameRef.current.value, passwordRef.current.value);
//     console.log(document.getElementById("h2").innerHTML)
//   }
//   const handleUsername = (e) => {
//     setUsername(e.target.value);
//   }
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   }
//   const handlePureComp = () => {
//     console.log(username, password);
//   }
//   return (
//     <>
//       <h2 id="h2"><span>Impure</span> Component</h2>
//       <input type="text" placeholder='Username:' id='username' /><br />
//       <input type="text" placeholder='Password:' id='password' /><br />
//       <button onClick={handleImpureComp}>Submit</button>

//       <h2>Half Impure Component</h2>
//       <input type="text" placeholder='Username:' ref={usernameRef} /><br />
//       <input type="text" placeholder='Password:' ref={passwordRef} /><br />
//       <button onClick={handleHalfImpureComp}>Submit</button>

//       <h2>Pure Component</h2>
//       <input type="text" placeholder='Username:' onChange={handleUsername} /><br />
//       <input type="text" placeholder='Password:' onChange={handlePassword} /><br />
//       <button onClick={handlePureComp}>Submit</button>
//     </>
//   )
// }

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("Dinesh");

//   const counter = () => {
//     // setCount(count+1);
//     setName("new name");
//   }

//   useEffect(() => {
//     console.log("useEffect called...");
//     setCount(count+1);
//   }, [name])

//   console.log("render...");
  
//   return (
//     <>
//       <p>Count: {count}</p>
//       <p>Name: {name}</p>
//       <button onClick={counter}>Click</button>
//     </>
//   )
// }

// export default function App() {
//   const handleClick = (e) => {
//     e.preventDefault();
//     console.log("handleClick...");
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("handleSubmit...");
//   }
//   return (
//     <>
//       <form method="post" onSubmit={handleSubmit}>
//         <input type="text" placeholder='Username:' name="username" />
//         <button>Submit 1</button>
//       </form>

//       <button>Submit 2</button>

//       {/* <a href="https://google.com" onClick={handleClick}>Click Here</a> */}
//     </>
//   )
// }

// export default function App() {
//   const [fact, setFact] = useState("");

//   async function fetchData() {
//     let res = await fetch("https://catfact.ninja/fact");
//     let data = await res.json();
//     console.log(data);
//     // if(data.fact !== "") 
//     setFact(data?.fact);
//   }

//   useEffect(() => {
//     // fetch("https://catfact.ninja/fact")
//     //   .then((res) => {
//     //     return res.json();
//     //     // let data = res.json();
//     //     // console.log(data);
//     //   })
//     //   .then(data => {
//     //     console.log(data);
//     //     setFact(data.fact)
//     //   })
//     fetchData();

//   },[])

//   return (
//     <>
//       <h1>Cat Facts</h1>
//       {fact}
//     </>
//   )
// }

export default function App() {

  const [population, setPopulation] = useState([]);
  const [pop, setPop] = useState("");

  const handleSearch = () => {
    fetch("https://datausa.io/api/data?drilldowns=Nation&measures="+pop)
      .then(res => res.json())
      .then(results => {
        console.log(results.data);
        setPopulation(results?.data);
      })
  }

  return (
    <>
      <h1>Population</h1>
      <input type="text" placeholder='Enter Population' onChange={(e) => setPop(e.target.value)} />
      <button onClick={handleSearch}>Search Population</button>
      {
        population.length >0 
          ? 
          population.map((v, i) => {
            return (
              <div key={i}>
                <p>Year: {v["ID Year"]}, Nation: {v.Nation}, Population: {v["Population"]}</p>
              </div>
            )
          })
          :
          <p>No Data Found</p>
      }
    </>
  )
}
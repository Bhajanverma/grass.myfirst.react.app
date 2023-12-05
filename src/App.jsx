import "./App.css";
// import styles from "./styles/App.css";

import BodyComponent from "./Components/BodyComponent";
import Counter from "./Components/Counter";
import FooterComponent from "./Components/Footer";
import Headers from "./Components/Header";
import HomePageContent from "./Components/homepage";
import LoginPage from "./Components/loginPage";
import MuiComponent from "./Components/muiComponent";
import NavbarComponent from "./Components/navbar";
import TodoComponent from "./Components/todoComponent";
import UserCard from "./Components/userCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppComponent() {
  var userData = [
    { name: "Harsh", age: 13 },
    { name: "Raj", age: 14 },
    { name: "Tiger", age: 15 },
    { name: "Joker", age: 16 },
    { name: "Joker", age: 16 },
    { name: "Joker", age: 16 },
    { name: "Joker", age: 16 },
  ];
  const myTask = [
    "Hello this is Bhajan",
    "I love Cricket",
    "Your most welcome to sri ganganagar",
    "i love devotional point",
  ];

  // const myTask = ["Go to vaishno devi","I love vaishno devi","Watch j&k","hello"];

  // const filterData = userData.filter((eachObj)=>eachObj.age>14);
  return (
    <>
      {/* <Counter/> */}
      {/* <Headers/> */}
      {/* <TodoComponent/> */}
    {/* <LoginPage/> */}
      <BrowserRouter>
      <NavbarComponent/>
      {/* <MuiComponent/> */}
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route
            path="/about"
            element={<HomePageContent name={"About Page"} />}
          />
          <Route
            path="/contact"
            element={<HomePageContent name={"Contact Page"} />}
          />
          <Route
            path="/counter"
            element={<Counter />}
          />
          <Route
            path="/todo"
            element={<TodoComponent />}
          />
          <Route
            path="/mui-learn"
            element={<MuiComponent />}
          />
        </Routes>
      </BrowserRouter>

      {/* <HomePageContent/> */}

      {/* <BodyComponent name= {"Bhajan"}/>
  <BodyComponent name= {"Shubha"}/>
  <FooterComponent/> */}
      {/* <div className="cardContainer">
    {userData.map((oneObj)=>(
      <UserCard
      name={oneObj.name}
      age={oneObj.age}
      mobileNumber={"123456789"}
      />
    ))}
  </div> */}

      {/* <ul>
    {myTask.map((a,index)=>(
      <li key={index}>{a}</li>
    ))}
    
  </ul> */}
      {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/800px-Shaqi_jrvej.jpg"/> */}
    </>
  );
}

export default AppComponent;

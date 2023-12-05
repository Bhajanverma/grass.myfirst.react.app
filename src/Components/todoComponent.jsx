import { useEffect, useState } from "react";
import animation from "../styles/Todo.module.css";
const TodoComponent = () => {
  // const [myTask, setMyTask] = useState([
  //   "Hello this is Bhajan",
  //   "I love Cricket",
  //   "Your most welcome to sri ganganagar",
  //   "i love devotional point",
  // ]);

  const [myTask, setMyTask] = useState([
    { text: "Hello World!", complete: false },
    { text: "jai mata di", complete: false },
    { text: "Your Most welcome in India", complete: false },
    { text: "I love Rajasthan", complete: false },
    { text: "Jai Hind Jai Bharat", complete: false },
  ]);

  const [activeValue,setActiveValue] = useState(myTask.length);

  const handleAddTask = () => {
    console.log("check it");
    if (item) {
      let arr = [...myTask,{text:item,complete:false}];
      setMyTask(arr);
      setItem("");
    }
  };
  const [item, setItem] = useState("");

  useEffect(()=>{
    let arr = [...myTask];

    let newArr = arr.filter((each)=> !each.complete).length;
    setActiveValue(newArr);
  },[myTask]);

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleCheckBox(index){
    console.log("this is clicked",index)
    let arr = [...myTask];
    console.log(arr[index]);
    arr[index].complete = !arr[index].complete;
    setMyTask(arr);
    
    let countArray = arr.filter((each)=>!each.complete);
    setActiveValue(countArray.length);
    console.log(countArray);
  }
  return (
    <>
    <div className={animation.container}>
      <h1 className={animation.head}>this is my todo app</h1>
      <input
        type="text"
        placeholder="add more..."
        onChange={handleChange}
        value={item}
      />
      <button onClick={handleAddTask}>Add</button>

      <ul>
        {myTask.map((eachValue,index) => (
          <li>
            <input
              type="checkbox"
              checked={eachValue.complete}
              onChange={()=>{
                console.log("it's console",index)
                handleCheckBox(index)}}
            />
            <span style={{textDecoration: eachValue.complete ? "line-through":""}}>{eachValue.text}</span>
          </li>
        ))}
      </ul>
      <>Active To-Do item : {activeValue}</>
      </div>
    </>
  );
};

export default TodoComponent;

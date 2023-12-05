import { useState } from "react";
import styles from "../styles/Counter.module.css";
const Counter =()=>{
    // let count = 0;
    let [count,setCount]= useState(0);
    function handleAddClick(){
        console.log("check")
        // count = count+1;
        // console.log(count)
        if (count<10){
            setCount(count+1);
        }
       
    }
    function handleSubClick(){
        console.log("check in")
       if (count>0){
        setCount(count-1);
       }
    }
    return(
        <>
        <div className={styles.container}>
       
        <h1 className={styles.heading}>This is Counter Component</h1>
        <h3>count:{count}</h3>
       {count == 0 ? <p>you have reached the last limit...</p> :<></>} 
       {count == 10 ? <p>Hureee you have reached the last point!</p> :<></> }


        {count < 10 &&  (<button onClick={handleAddClick}>Add Count</button> )} 
        {count > 0 && (<button onClick={handleSubClick}>Subtract Count</button> )}
        </div>
        </>
    );
}
export default Counter;
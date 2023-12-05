function BodyComponent(props){
  console.log(props);
  let userName = props.name;
    let fName = "Bhajan"
  let lName = "Verma"

  function handleClick(){
    console.log("check")
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log("submit")
  }
    return  <>
    <h1>my name is Bhajan {userName}</h1>
  <p>this is text</p>
  <h3>hi this is {fName}{lName}</h3>
  <button onClick={handleClick}>my button</button>

  <form onSubmit={handleSubmit} className="Form">
  <label htmlFor="fname">First name:</label>
  <br/>
  <input type="text" id="fname" name="fname" value="John"/>
  <br/>
  <label htmlFor="lname">Last name:</label>
  <br/>
  <input type="text" id="lname" name="lname" value="Doe"/><br/><br/>
  <input type="submit" value="Submit"/>
</form> 
    </>
}

export default BodyComponent;
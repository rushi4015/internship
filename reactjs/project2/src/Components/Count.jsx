import { useState } from "react";
const Counter = () => {
    let [value,setValue] = useState(0)
    let [visible,setVisible]=useState(true);

  const Incr = () => {
    setValue(++value);
    console.log(value)
  }
  const Decr = () => {
    setValue(--value);
    console.log(value);
  }
  const Reset = () => {
    setValue(0);
  }
  const Toggle=() => {
  setVisible(!visible);    

  }
  const Time=() => {
  setTimeout(() =>{
    setValue(value+1);
  },3000);
  
  }
  return (
    <>
    <div>
      {visible &&
      (<p>Click Count : {value}</p>)
    }
      <button onClick={Incr}>Increment</button>
      <button onClick={Decr}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Toggle}>Toggle</button>
      <button onClick={Time}>TimeOut</button>
      </div>
    </>
  )
}

export default Counter
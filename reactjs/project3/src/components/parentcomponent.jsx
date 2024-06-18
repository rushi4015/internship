import {useState} from 'react';
import ChildComponent from './childcomponent';
const ParentComponent=()=>{
    const[name,setName]=useState("username");
    const changeNameHandler=()=>{
        setName("Rushi");
        console.log(name);
    }
    return (
        <>
        <div>Inside the parent component</div>
        <h1>Name:{name}</h1>
        {/* <button onClick={changeNameHandler}>Change Name{parent}</button> */}
        <ChildComponent onNameChange={changeNameHandler}/>
        </>
    )

}


export default ParentComponent;
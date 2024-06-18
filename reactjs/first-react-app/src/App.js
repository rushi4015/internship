import logo from './logo.svg';
import './App.css';

function App() {
 
// let condition=true;
// function condition_check(){
// return(
//   condition?printname():printfalse()
// )
// }

// function printfalse(){
//   return(
//     <h1>false</h1>
//   )
// }

 

let Component=()=>{
  let name=<h1>dev</h1>
  let lastname=<h1>patel</h1>
let obj={
  name:"rushi",
  lastname:"patel",
  isauthorized:"true"
}

function printname(){
  return(
   <h3>{name}{lastname}</h3> 
  )
}

function printobj(){
  return(
    <h1>{obj.name}{obj.lastname}</h1>
  )
}

return(
  printname()
)


}
  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    
    //       <div><p>hello react Learner</p></div>
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
    //<></> called empty tag in react 
    
    
    
    <div style={{backgroundColor : "red"}}>
     <Component/>    </div>
  
  );
}

export default App;

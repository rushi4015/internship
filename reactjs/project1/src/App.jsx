
// // function App() {
  
// // let Name="rushi patel"
// //   return (
// //     <>

// // <Name name="rushi patel"/>
// // {/* <h1>hello react Learner</h1>
// // <h3>My name is:{name}</h3>
// // <p>Lorem ipsum dolor sit amet.</p> */}
    
    
// //     </>
// //   )
// // }

// // const Name=(props)=>{
// // console.log(props.name);
// // //   let a="rushi";
// // // let b="patel";
// // //   let firstname=a
// // //   let lastname=b
// //   return(
// //   //  <h3>{firstname}{lastname}</h3> 
// //    <h3>{props.name}</h3> 
// //   )
// // }



// // export default App
// /* eslint-disable react/prop-types */


// import Name from "./component/Name";
// import Calculator from "./component/Calculator";
// import Description from "./component/Description";





// function App() {
//   return (
//     <>
//       <Name name="Rushi Patel" />

//       <Description />
//       <Calcultor a="10" b="20"/>
//       <Calcultor a="50" b="20"/>
//     </>
//   )
// }

// const Name = (props) => {
  
//   console.log(props.name);
//   return (
//     <>
//       <h1>My name is {props.name}</h1>
//     </>
//   )
// }

// const Description = () => {
//   return (
//     <>
//       <h3>This is React app</h3>
//     </>
//   )
// }

// const Calcultor = (props) => {
//   // let a = 10, b = 30;

//   return (
//     <>
//       <p>This is the calcultor</p>
//       <p>The ans is {parseInt(props.a) + parseInt(props.b)}</p>
//     </>
//   )
// }

// export default App




/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import Name from "./components/Name"
import Calculator from "./components/Calculator";
import Description from "./components/Description"
import Greetings from "./components/Greetings"
function App() {
  let auth = false;
  return (
    <>
      <Name name="Rushi Patel" />
      <Name name="Rushi" />
      <Description />
      {auth ? (
        <>
          <Calculator a="10" b="20" />
          <Calculator a="50" b="20" />
          <Greetings />
        </>
      ) : null
      }
      {/* if(auth){
        <Calculator a="10" b="20"/>
        <Calculator a="50" b="20"/>
        <Greetings/>
      } */}
    </>
  )
}





export default App
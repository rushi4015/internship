
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Component from './components/Component';
import ChildComponent from './components/childcomponent';
import ParentComponent from './components/parentcomponent';
import SecondComponent from './components/secondcomponent';

function App() {

 
  return (
    <>
<Component/>
    <SecondComponent/>  
    <ChildComponent/>
    <ParentComponent/>
       </>
  )
}

export default App

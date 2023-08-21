import { useState } from 'react';
import './App.css';
import Layout from './component/Layout';
import ChildComponent from './component/callback/ChildComponent';
import Input from './component/layout/input/Input';
import ReactState from './component/react-hook/ReactState';
import Thukinh from './component/bai-tap-use-state/Thukinh';

function App() {
  // const [name, thayDoiName] = useState(false)

  // const updateState = () => {
  //   thayDoiName(!name)
  // }
  // const nameInput = ['name', 'image', 'price', 'desc']

  // const handelCick = (message) => {
  //   console.log(message);
  // }
  return (
    <div className="App">
      {/* <Layout name = "javascript"/> */}
      {/* <p> component cha </p> */}
      {/* <ChildComponent onButtonClick={handelCick} /> */}
      {/* <form>
        {nameInput.map((name,index) => (
          <Input key={index}
            placeholder={name}
          />
        ))}
        <button style={{backgroundColor:"green", color:"white", width:"80px"}}>
          click me
        </button>
      </form> */}

      {/* <ReactState/> */}

      {/* ReactState
      <br />
      <button className={`${name ? "bg-green-500" : " bg-red-500"}`}
        onClick={() => thayDoiName(!name)}
        style={{ padding: "5px", color: "white" }} >
        set name with useState
      </button>

      <div className='text-2xl font-bold text-pink-800'>

        {name ? " on " : "off"} */}
      {/* </div> */}

      <Thukinh/>
    </div>
  );
}

export default App;

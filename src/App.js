import { useState } from "react";
import "./App.css";
import Layout from "./component/demo-layout/Layout";
import ChildComponent from "./component/callback/ChildComponent";
import Input from "./component/layout/input/Input";
import ReactState from "./component/react-hook/ReactState";
import Thukinh from "./component/bai-tap-use-state/Thukinh";
import DemoStateClass from "./component/bai-tap-use-state/DemoStateClass";

function App() {
  const [count, setCount] = useState(10);
  // stale state
  const handelClick = () => {
    setTimeout(() => {
      setCount((prevCount) => {
        return prevCount + 1;
      });
      console.log(count);
    }, 2000);
  };
  return (
    <div className="App">
      <button style={{ backgroundColor: "red" }} onClick={handelClick}>
        {" "}
        click me
      </button>

      <p>{count}</p>
      <DemoStateClass />
    </div>
  );
}

export default App;

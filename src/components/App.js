
import React, { useState } from "react";
import './../styles/App.css';



const App = () => {
  return (
    let [count, setCount]=useState(0);
    <div>
        <p>Button clicked {count} times</p>
        <button onclick={()=>setCount(count+1)}>Click me</button>
    </div>
  )
}

export default App

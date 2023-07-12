
import React from "react";
import './../styles/App.css';

export let count=0;
function clickCount(){
  count++;
  return count;
}

const App = () => {
  return (
    <div>
        <p>Button clicked {count} times</p>
        <button onclick={clickCount()}>Click me</button>
    </div>
  )
}

export default App

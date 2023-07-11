
import React from "react";
import './../styles/App.css';
let count=0;
function clickCount(){
  count++;
  return count;
}

const App = () => {
  return (
    <div>
        Button clicked {count /* Do not remove the main div */} times.
        <button>Click me</button>
    </div>
  )
}

export default App


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
        Button clicked 0 {/* Do not remove the main div */} times.
    </div>
  )
}

export default App

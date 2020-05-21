import React from 'react';
import './App.css';

// in React, we use "className" instead "class"
// map function in JS https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// () => {} is a function
// image => {} says the "image" variable is the argument
// the braces contain the contents of the function and are executed anytime the function is called

const images = ["800x400", "800x400", "400x200", "400x200", "200x100", "200x100"];

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>

      <b>{new Date().toDateString()}</b>

      <div className="images">
          {images.map(image => {
            return <img src={"https://source.unsplash.com/random/" + image} alt="a random image" />;
          })}
      </div>
    </div>
  );
}


export default App;

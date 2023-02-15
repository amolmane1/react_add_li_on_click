import React from "react";
import Item from "./Item";

function App() {
  var [items, setItems] = React.useState([]);
  var [currText, setCurrText] = React.useState("");
  function handleInputChange(event) {
    setCurrText(event.target.value);
  }

  function handleClick(event) {
    setItems((prevValue) => [...items, { key: items.length, value: currText }]);
    // setItems((prevValue) => [...items, currText]);

    setCurrText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInputChange} type="text" value={currText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <Item key={item.key} value={item.value} />
            // <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

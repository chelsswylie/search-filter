import "./App.css";
import JSONDATA from "./mock-data.json";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search here"
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchValue == "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return <div>{val.first_name}</div>;
      })}
    </div>
  );
}

export default App;

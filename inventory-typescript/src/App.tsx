import { useState } from "react";
import "./App.css";
import { AddItem } from "./components/AddItem";

function App() {
  const [data, setData] = useState({ items: [] });

  return (
    <div className="App">
      <div>SAD</div>
      <AddItem />
    </div>
  );
}

export default App;

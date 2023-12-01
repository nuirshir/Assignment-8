import { useState } from "react";
import "./App.css";
import Cards from "./Component/Cards";
import Purchase from "./Component/Purchase";
import Header from "./Component/header";

function App() {

  const [names, setNames] = useState([])
  const [ Credit, setCredit ] = useState(0)
  const [ Price, setPrice ] = useState(0)

  const addList = (name, credit, price) => {
    setNames([...names, name]);
    setCredit(Credit + credit);
    setPrice( Price + parseFloat(price) );
  }

  return (
    <>
      <div className="bg-[#F3F3F3]">

        <div className="max-w-7xl mx-auto p-6">
          <Header></Header>
        </div>

        <div className="max-w-7xl mx-auto flex gap-6">
          <Cards addList={addList}></Cards>
        <Purchase names={names} Credit={Credit} Price={Price}></Purchase>
        </div>

      </div>
    </>
  );
}

export default App;

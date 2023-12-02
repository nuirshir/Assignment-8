import { useState } from "react";
import "./App.css";
import Cards from "./Component/Cards";
import Purchase from "./Component/Purchase";
import Header from "./Component/header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [names, setNames] = useState([]);
  const [ Credit, setCredit ] = useState(0);
  const [ Price, setPrice ] = useState(0);
  const [remaining, setRemaining] = useState(20);

  const addList = (name, credit, price) => {
    setNames([...names, name]);
    const totalCredit = Credit + credit;
    if( totalCredit <= 20 ){
      setCredit( totalCredit );
    }
    setPrice( Price + parseFloat(price) );
    if ( Credit <= 20 ){
      setRemaining( remaining - credit );
    }
    if ( Credit >= 20 ){
      toast('You can only use 20 hour of credit')
    }
  }


  return (
    <>
      <div className="bg-[#F3F3F3]">

        <ToastContainer />

        <div className="max-w-7xl mx-auto p-6">
          <Header></Header>
        </div>

        <div className="max-w-7xl mx-auto flex gap-6">
          <Cards addList={addList}></Cards>
          <Purchase names={names} Credit={Credit} Price={Price} remaining={remaining}></Purchase>
        </div>

      </div>
    </>
  );
}

export default App;

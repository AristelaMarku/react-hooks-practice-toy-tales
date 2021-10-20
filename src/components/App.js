import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [listToys,setLIstToy]=useState([])
  const [showForm, setShowForm] = useState(false);
  console.log(listToys)
  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then((r)=>r.json())
    .then((data)=>{
       setLIstToy(data)
    })

  },[])

   function handleDelete(toDelete){
    const arrayTorender=listToys.filter((toy)=>toy!==toDelete)
    setLIstToy(arrayTorender)
   }

  function handleUptadeItem(updateItem){
    console.log(updateItem)
    const updatedItems=listToys.map((item)=>{
      if(item.likes===updateItem.likes){
        return updateItem
      }else{
        return item;
      }
    })
    console.log(updatedItems)
    setLIstToy(updatedItems)
  }

  function addNewToy(newToy){
  setLIstToy([...listToys,newToy])
  }
  
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer listToys={listToys} handleUptadeItem={handleUptadeItem} handleDelete={handleDelete}/>
    </>
  );
}

export default App;

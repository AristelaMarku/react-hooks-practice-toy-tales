import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({listToys,handleUptadeItem,handleDelete}) {
  return (
    <div id="toy-collection">
      {listToys.map((toy)=>{
        return <ToyCard toy={toy} handleUptadeItem={handleUptadeItem} handleDelete={handleDelete}/>
      })}
    </div>
  );
}

export default ToyContainer;

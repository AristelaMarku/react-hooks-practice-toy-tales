import React, { useState } from "react";

function ToyForm({addNewToy}) {
  const [inputForm,setInputForm]=useState({
    name:'',
    image:'',
    likes:0
  })
  

  function handleChange(e){
  const name=e.target.name
  const value=e.target.value
  setInputForm({
    ...inputForm,
    [name]:value
  })
  }

  function handleSubmit(e){
    e.preventDefault()
    //addNewToy(inputForm)
    fetch("http://localhost:3001/toys",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputForm),
    })
    .then((r) => r.json())
    .then((newItem) => addNewToy(newItem)); 
  }

  return (
    <div className="container" onSubmit={handleSubmit}>
      <form className="add-toy-form" value={inputForm.name} onChange={handleChange}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={inputForm.image}
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

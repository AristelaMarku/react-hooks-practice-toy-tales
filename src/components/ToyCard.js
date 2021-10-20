import React, { useState } from "react";

function ToyCard({toy,handleUptadeItem,handleDelete}) {
const[likes,setLikes]=useState(toy.likes)

function handleLike(){
  setLikes(likes+1)
  fetch(`http://localhost:3001/toys/${toy.id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      likes: likes
    }),
  })
  .then((r) => r.json())
  .then((updatedItem) => handleUptadeItem(updatedItem));
}

function onClickDelete(){
  fetch(`http://localhost:3001/toys/${toy.id}`,{
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => handleDelete(toy));
}


  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn"onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={onClickDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

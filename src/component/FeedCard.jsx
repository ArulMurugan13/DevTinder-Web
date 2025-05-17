import React from "react";

const FeedCard = ({ user }) => {
  const { fname, lname, photourl, about , age } = user;

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={photourl} alt={fname}/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{fname + " " + lname}</h2>
        <h3>{age}</h3>
        <p>{about}</p>
        <div className="card-actions justify-evenly mt-10">
          <button className="btn bg-red-500">Ignore</button>
          <button className="btn bg-green-500">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;

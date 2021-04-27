import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="card">
      {user.name[0]}
      <div className="card-detail">
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <h2> {user.phone} </h2>
        <h2>{user.address.street}</h2>
        <h2> {user.address.city} </h2>

        <button>check profile </button>
      </div>
    </div>
  );
};

export default UserCard;

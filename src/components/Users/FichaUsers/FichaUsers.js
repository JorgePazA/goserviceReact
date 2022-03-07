import React from "react";
import "./FichaUsers.css";

function FichaUsers(props) {
  return (
    <div className="users">
      <div className="ficha-user">
        <table class="table">
          <tr>
            <th>{props.name}</th>
            <th>{props.email}</th>
            <th>{props.urlDetail}</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default FichaUsers;

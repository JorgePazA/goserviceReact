import React from "react";
import "./FichaUsers.css";

function FichaUsers(props) {
  return (
    <div className="gogers">
      <div className="ficha-goger">
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

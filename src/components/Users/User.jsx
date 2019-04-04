import React from "react";

function User({ id, firstName, lastName, photo }) {
  return (
    <div>
      {id} :: { firstName} :: { lastName } :: { photo }
    </div>
  )
}

export default User;
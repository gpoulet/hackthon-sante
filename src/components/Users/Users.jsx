import React from "react";
import User from "./User";
function Users({ users }) {
  return (
    <div>
      coucou
      { users.map(user => <User {...user} key={user.id} />) }
    </div>
  )
}

Users.defaultProps= {
  users: []
}

export default Users;
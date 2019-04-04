import React from "react";
import User from "./User";
import history from "../../history"
import { Button } from "antd-mobile";
import { ROUTING_ADD, ROUTING_USERS } from '../../constants'


function Users ({ users }) {
  return (
    <div>
      {users.map(user => <User {...user} key={user.id}/>)}
      <Button type="primary" onClick={() => history.push(ROUTING_USERS + ROUTING_ADD)}>Ajouter</Button>
    </div>
  )
}

Users.defaultProps = {
  users: []
}

export default Users;

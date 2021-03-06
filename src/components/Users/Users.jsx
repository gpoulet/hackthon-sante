import React from "react";
import User from "./User";
import history from "../../history"
import { Button } from "antd-mobile";
import { Icon } from "antd";
import { ROUTING_ADD, ROUTING_USERS } from '../../constants'


function Users ({ users }) {
  return (
    <div>
      <h2><Icon type="home"/> Membres de la famille</h2>
      {users.map(user => <User {...user} key={user.id}/>)}
      <Button type="primary" onClick={() => history.push(ROUTING_USERS + ROUTING_ADD)}><Icon type="user-add" />&nbsp;&nbsp;Ajouter</Button>
    </div>
  )
}

Users.defaultProps = {
  users: []
}

export default Users;

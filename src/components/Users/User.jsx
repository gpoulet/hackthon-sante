import React from "react";
import { Card } from 'antd';
import { ROUTING_USERS } from '../../constants'

function User({ id, firstName, lastName, dateNaissance, photo }) {
  return (
    <div>
      <Card title={firstName+" "+lastName} bordered={false} extra={<a href={ROUTING_USERS+"/"+id}>Choisir</a>}>
        <p>id : { id }</p>
        <p>date naissance : { dateNaissance }</p>
        <p>photo :  {photo} </p>
      </Card>
    </div>
  )
}

export default User;
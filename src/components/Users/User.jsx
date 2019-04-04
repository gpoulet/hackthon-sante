import React from "react";
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

import { Link } from 'react-router-dom';

import { ROUTING_USERS } from '../../constants'

function User({ id, firstName, lastName, dateNaissance, photo }) {
  return (
    <div>
      <Card title={firstName+" "+lastName} extra={<Link to={ROUTING_USERS+"/"+id} >Choisir</Link>}>
        <p>id : { id }</p>
        <p>date naissance : { dateNaissance }</p>
        <p>photo :  {photo} </p>
      </Card>
    </div>
  )
}

export default User;

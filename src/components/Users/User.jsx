import React from "react";
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';

import { Link } from 'react-router-dom';

import { ROUTING_USERS } from '../../constants'

function User ({ id, firstName, lastName, dateNaissance, photo }) {
  return (
    <div>
      <Card>
        <WingBlank>
          <Card.Header title={firstName + " " + lastName}
                       thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                       extra={<Link to={ROUTING_USERS + "/" + id}>Choisir</Link>}/>
          <p>date naissance : {dateNaissance}</p>
          <p>photo : {photo} </p>
        </WingBlank>
      </Card>
      <WhiteSpace size="lg" />
    </div>
  )
}

export default User;

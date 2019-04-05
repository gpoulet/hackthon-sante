import React from "react";
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import { Avatar, Button } from 'antd';

import { Link } from 'react-router-dom';

import { ROUTING_PARKOURS, ROUTING_USERS } from '../../constants'

function User ({ id, firstName, lastName, dateNaissance, photo }) {
  return (
    <div>
      <Card>
        <WingBlank>
          <Card.Header title={firstName + " " + lastName}
                       thumb={<div className="user-avatar"><Avatar size="large" icon="user"/></div>}
                       extra={<Link to={ROUTING_USERS + "/" + id + ROUTING_PARKOURS}><Button type="primary" ghost>Parcours</Button></Link>}/>
          <WingBlank>
            <p>Date naissance : {dateNaissance}</p>
          </WingBlank>
        </WingBlank>
      </Card>
      <WhiteSpace size="lg"/>
    </div>
  )
}

export default User;

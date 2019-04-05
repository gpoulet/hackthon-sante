import React from "react";
import { Card, WingBlank, WhiteSpace, Flex } from 'antd-mobile';
import { Avatar, Button, Icon } from 'antd';

import { Link } from 'react-router-dom';

import { ROUTING_PARKOURS, ROUTING_USERS, ROUTING_DOCUMENTS } from '../../constants'


function User ({ id, firstName, lastName, dateNaissance, photo }) {

  const Extra = () => {
    return (
      <Flex direction="row" justify="end">
        <Link to={ROUTING_USERS + "/" + id + ROUTING_DOCUMENTS} style={{ paddingRight: '15px'}}>
          <Button>
            Documents
          </Button>
        </Link>
        <Link to={ROUTING_USERS + "/" + id + ROUTING_PARKOURS}>
          <Button type="primary">Parcours</Button>
        </Link>
      </Flex>
    );
  }

  return (
    <div>
      <Card>
        <WingBlank>
          <Card.Header title={firstName + " " + lastName}
                       thumb={<div className="user-avatar"><Avatar size="large" src={photo}/></div>}
                       thumbStyle={{ height: '30px' }} />
          <Extra />
          <WhiteSpace size="lg"/>
          <p>date naissance : {dateNaissance}</p>
        </WingBlank>
      </Card>
      <WhiteSpace size="lg"/>
    </div>
  )
}

export default User;

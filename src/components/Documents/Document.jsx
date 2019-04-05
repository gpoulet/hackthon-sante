import React from "react";
import { Card, WingBlank, WhiteSpace, Flex } from 'antd-mobile';
import { Avatar, Button, Icon } from 'antd';

import { Link } from 'react-router-dom';

import {ROUTING_DOCUMENTS, ROUTING_USERS} from '../../constants'

function Document ({ document,userId }) {


    const Extra = () => {
        return (
            <Flex direction="row" justify="end">
                <Link to={ROUTING_USERS + "/" + userId + ROUTING_DOCUMENTS+"/"+document.id}>
                    <Button type="primary" ghost>Document</Button>
                </Link>
            </Flex>
        );
    }

    return (
        <div>
            <Card>
                <WingBlank>
                    <Card.Header title={document.name }
                                 thumb={<div className="user-avatar"><Avatar size="large" src={document.file}/></div>}
                                 thumbStyle={{ height: '30px' }} />
                    <Extra />
                    <WhiteSpace size="lg"/>
                    <p>date de l'ajout : {document.date}</p>
                </WingBlank>
            </Card>
            <WhiteSpace size="lg"/>
        </div>
    )
}


export default Document;

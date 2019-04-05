import React from "react";
import { Card, WingBlank, WhiteSpace, Flex } from 'antd-mobile';
import { Avatar, Button, Icon } from 'antd';

import { Link } from 'react-router-dom';

import {ROUTING_DOCUMENTS,ROUTING_DOCUMENT_DETAIL, ROUTING_USERS} from '../../constants'

function Document ({ document,userId }) {


    const Extra = () => {
        return (
            <Flex direction="row" justify="end">
                <Link to={ROUTING_USERS + "/" + userId + ROUTING_DOCUMENTS+"/"+document.id +ROUTING_DOCUMENT_DETAIL}>
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
                                 thumb={
                                     <a href={document.file} target="_blank" rel="noreferrer noopener">

                                         <div className="user-avatar"><Avatar size="large" src={document.file}/></div> </a>}
                                 thumbStyle={{ height: '30px' }} />
                    <Extra />
                    <WhiteSpace size="lg"/>
                    <p>Nom du praticien : {document.doctor}</p>
                    <WhiteSpace size="lg"/>
                    <p>Date de l'ajout : {document.date}</p>
                    <WhiteSpace size="lg"/>
                    <p>Résultat : {document.commentaire}</p>
                </WingBlank>
            </Card>
            <WhiteSpace size="lg"/>
        </div>
    )
}


export default Document;

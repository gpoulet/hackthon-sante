import React from "react";
import {List} from "antd-mobile";
import {ROUTING_DOCUMENTS} from "../../constants";

const Item = List.Item;

function Document({document, userId}) {
    return (
        <Link to={ROUTING_USERS + '/' + userId + ROUTING_DOCUMENTS }>

            <Item arrow="horizontal" multipleLine onClick={() => {
            }}>
                {document.name}
            </Item>
        </Link>
    );
}

export default Document;
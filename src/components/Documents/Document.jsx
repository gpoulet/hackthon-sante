import React from "react";
import { List } from "antd-mobile";
import { Link } from "react-router-dom";
import { ROUTING_DOCUMENTS, ROUTING_USERS } from "../../constants";

const Item = List.Item;

function Document ({ document, userId }) {
  return (
    <Item arrow="horizontal" multipleLine>
      <Link to={ROUTING_USERS + '/' + userId + ROUTING_DOCUMENTS}>
        {document.name}
      </Link>
    </Item>
  );
}

export default Document;

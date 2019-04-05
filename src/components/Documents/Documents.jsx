import React from "react";

import Document from "./Document";
import { List } from "antd-mobile";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import { ROUTING_ADD, ROUTING_DOCUMENTS, ROUTING_USERS } from "../../constants";

function Documents ({ documents, match }) {
  return (
    <div>
      <h2>Mes documents</h2>
      <List className="my-list">
        <List.Item>
          <Link to={ROUTING_USERS + "/" + match.params.userId + ROUTING_DOCUMENTS + ROUTING_ADD}>
            <Icon type="plus"/> Ajouter un Document
          </Link>
        </List.Item>
        {
          documents.map(document => <Document key={document.id} document={document} userId={match.params.userId}/>)
        }
      </List>
    </div>
  );
}

Documents.defaultProps = {
  documents: []
};

export default Documents;

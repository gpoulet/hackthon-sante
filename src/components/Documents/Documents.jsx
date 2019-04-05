import React from "react";

import Document from "./Document";
import { Icon, List } from "antd-mobile";
import { Link } from "react-router-dom";
import { ROUTING_ADD, ROUTING_DOCUMENTS, ROUTING_USERS } from "../../constants";

function Documents({ documents, match }) {
    return (
        <List renderHeader={() => "document"} className="my-list">
            <Link to={ROUTING_USERS + "/"+ match.params.userId + ROUTING_DOCUMENTS + ROUTING_ADD}>
                <List.Item>
                    <Icon type="check-circle-o"/> Ajouter un Document
                </List.Item>
            </Link>
            {documents.map(document => (
                <Document key={document.id}  document={document} userId={match.params.userId} />
            ))}
        </List>
    );
}

Documents.defaultProps = {
    documents: []
};

export default Documents;

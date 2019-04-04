import React from "react";
import Document from "./Document.jsx";

import { Flex, WhiteSpace, Icon, List } from "antd-mobile";
import Parkour from "../Parkours/Parkour";

const Item = List.Item;
const Brief = Item.Brief;

function Documents({ documents }) {
  return (
      <List renderHeader={() => "documents"} className="my-list">
        {documents.map(document => (
            <Document key={document.id}  document={document} />
        ))}
      </List>
  );
}

Users.defaultProps= {
  documents: []
}

export default Documents;
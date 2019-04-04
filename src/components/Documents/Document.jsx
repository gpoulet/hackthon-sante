import React from "react";
import { List } from "antd-mobile";

const Item = List.Item;
function Document({document }) {
  return (
      <Item arrow="horizontal" multipleLine onClick={() => {}}>
          {document.name}
      </Item>
  );
}

export default Document;
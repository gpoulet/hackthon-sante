import React from "react";

import { List } from "antd-mobile";

const Item = List.Item;

function Parkour({ parkour }) {
  return (
    <Item arrow="horizontal" multipleLine onClick={() => {}}>
      {parkour.title}
    </Item>
  );
}
export default Parkour;

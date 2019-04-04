import React from "react";

import Parkour from "./Parkour.jsx";
import { Flex, WhiteSpace, Icon, List } from "antd-mobile";

const Item = List.Item;
const Brief = Item.Brief;

function Parkours({ parkours }) {
  return (
    <List renderHeader={() => "Parcours"} className="my-list">
      {parkours.map(parkour => (
        <Parkour key={parkour.id}  parkour={parkour} />
      ))}
    </List>
  );
}

Parkours.defaultProps = {
  parkours: []
};

export default Parkours;

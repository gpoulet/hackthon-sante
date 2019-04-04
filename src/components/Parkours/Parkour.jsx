import React from "react";

import { List } from "antd-mobile";
import { Link } from "react-router-dom";
import { ROUTING_PARKOURS, ROUTING_USERS } from "../../constants";

const Item = List.Item;

function Parkour ({ parkour, userId }) {
  return (
    <Link to={ROUTING_USERS + '/' + userId + ROUTING_PARKOURS + '/' + parkour.id}>
      <Item arrow="horizontal" multipleLine>
        {parkour.title}
      </Item>
    </Link>
  );
}

export default Parkour;

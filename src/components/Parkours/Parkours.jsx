import React from "react";

import Parkour from "./Parkour.jsx";
import { Icon, List } from "antd-mobile";
import { Link } from "react-router-dom";
import { ROUTING_ADD, ROUTING_PARKOURS, ROUTING_USERS } from "../../constants";

function Parkours({ parkours, match }) {
  return (
    <List renderHeader={() => "Parcours"} className="my-list">
      <Link to={ROUTING_USERS + "/"+ match.params.userId + ROUTING_PARKOURS + ROUTING_ADD}>
        <List.Item>
          <Icon type="check-circle-o"/> Ajouter un parcour
        </List.Item>
      </Link>
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

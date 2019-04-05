import React from "react";

import Parkour from "./Parkour";
import { Icon, List } from "antd-mobile";
import { Link } from "react-router-dom";
import { ROUTING_ADD, ROUTING_PARKOURS, ROUTING_USERS } from "../../constants";

function Parkours({ parkours, match }) {
  return (
    <List renderHeader={() => "Parcours"} className="my-list">
      <Link to={ROUTING_USERS + "/"+ match.params.userId + ROUTING_PARKOURS + ROUTING_ADD}>
        <List.Item>
          <Icon type="check-circle-o"/> Ajouter un parcours
        </List.Item>
      </Link>
      {parkours.map(parkour => (
        <Parkour key={parkour.id}  parkour={parkour} userId={match.params.userId} />
      ))}
    </List>
  );
}

Parkours.defaultProps = {
  parkours: []
};

export default Parkours;

import React from "react";

import Parkour from "./Parkour";
import { Icon, List } from "antd-mobile";
import { Link } from "react-router-dom";
import { ROUTING_ADD, ROUTING_PARKOURS, ROUTING_USERS,ROUTING_DOCUMENTS } from "../../constants";

function Parkours({ parkours, match }) {
  return (
    <List renderHeader={() => "Parcours"} className="my-list">
      <Link to={ROUTING_USERS + "/"+ match.params.userId + ROUTING_PARKOURS + ROUTING_ADD}>
        <List.Item>
          <Icon type="check-circle-o"/> Ajouter un parcours
        </List.Item>
      </Link>
        <Link to={ROUTING_USERS + "/"+ match.params.userId + ROUTING_DOCUMENTS}>
            <List.Item>
                <Icon type="book"/> Acceder aux documents
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

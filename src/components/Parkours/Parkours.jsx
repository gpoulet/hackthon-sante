import React from "react";

import Parkour from "./Parkour";
import { List } from "antd-mobile";
import { Icon } from "antd";
import { Link } from "react-router-dom";
import { ROUTING_ADD, ROUTING_PARKOURS, ROUTING_USERS,ROUTING_DOCUMENTS } from "../../constants";

function Parkours ({ parkours, user, match }) {
  return (
    <List renderHeader={() => <h2>Parcours de {user.firstName}</h2>} className="my-list">
      <List.Item style={{display: 'flex !important',
        flexDirection: 'column !important'}}>
        <Link style={{margin: '0 auto'}} to={ROUTING_USERS + "/" + match.params.userId + ROUTING_PARKOURS + ROUTING_ADD}>
          <Icon type="plus"/> Ajouter un parcours
        </Link>
      </List.Item>
      {parkours.map(parkour => (
        <Parkour key={parkour.id} parkour={parkour} userId={match.params.userId}/>
      ))}
    </List>
  );
}

Parkours.defaultProps = {
  parkours: []
};

export default Parkours;

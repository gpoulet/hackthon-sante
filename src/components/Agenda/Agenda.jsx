import React from "react";
import history from "../../history";
import { List } from "antd-mobile";
import { Icon } from "antd";
import moment from "moment";
import { ROUTING_USERS, ROUTING_PARKOURS } from "../../constants";

const Item = List.Item;
const Brief = Item.Brief;
import 'moment/locale/fr'  // without this line it didn't work
moment.locale('fr')

const getEvent = (parkours, users) => {
  return parkours
    .flatMap(parkour =>
      parkour.events.map(event => ({
        user: users.find(user => user.id === parkour.user),
        parkourId: parkour.id,
        ...event
      }))
    )
    .filter(event => moment(event.date, "YYYYMMDD").isAfter(moment()));
};

function Agenda({ parkours, users }) {
  return (
    <div>
      <List renderHeader={() => (<h2><Icon type="calendar"/> Agenda de la famille</h2>)}>
        {getEvent(parkours, users).map(event => (
          <a href="javascript:void(0)" onClick={() => {
            history.push(
              ROUTING_USERS +
              "/" +
              event.user.id +
              ROUTING_PARKOURS +
              "/" +
              event.parkourId
            );
          }}>
            <Item
              arrow="horizontal"
              multipleLine
              key={event.id}
            >
              <Icon type="clock-circle"/>&nbsp;&nbsp;{moment(event.date).format("Do MMMM YYYY")} -  {event.user.lastName + " " + event.user.firstName}
              <Brief>
                {event.title}
              </Brief>
            </Item>
          </a>
        ))}
      </List>
    </div>
  );
}

Agenda.defaultProps = {
  parkours: [],
  users: []
};

export default Agenda;
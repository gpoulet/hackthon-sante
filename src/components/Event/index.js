import { connect } from 'react-redux';

import EventAdd from './EventAdd';
import { addEvent } from "../../store/event";
import history from "../../history";
import { ROUTING_PARKOURS, ROUTING_USERS } from "../../constants";

const mapDispatchToProps = (dispatch, props) => {
  const userId = props.match.params.userId;
  const parkourId = props.match.params.parkourId;
  return {
    add: event => {
      dispatch(addEvent(event));
      history.push(ROUTING_USERS+"/"+userId + ROUTING_PARKOURS + "/" + parkourId);
    }
  };
};

export default connect(undefined, mapDispatchToProps)(EventAdd)

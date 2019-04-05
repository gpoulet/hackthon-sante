import { connect } from 'react-redux';

import EventAdd from './EventAdd.jsx';
import { addEvent } from "../../store/parkours";
import history from "../../history";
import { ROUTING_PARKOURS, ROUTING_USERS } from "../../constants";

const mapDispatchToProps = (dispatch, props) => {
  const { userId, parkoursId } = props.match.params;
  return {
    add: event => {
      console.log("event", event);
      dispatch(addEvent(event));
      history.push(ROUTING_USERS+"/"+userId + ROUTING_PARKOURS + "/" + parkoursId);
    }
  };
};

export default connect(undefined, mapDispatchToProps)(EventAdd)

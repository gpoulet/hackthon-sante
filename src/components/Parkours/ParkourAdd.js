import { connect } from "react-redux";
import ParkourAdd from "./ParkourAdd.jsx";
import { addParkour } from "../../store/parkours";
import history from "../../history";
import { ROUTING_USERS, ROUTING_PARKOURS } from "../../constants";


const mapDispatchToProps = (dispatch, props) => {
  const userId = props.match.params.userId;
  return {
    add: parkour => {
      dispatch(addParkour(parkour));
      history.push(ROUTING_USERS+"/"+userId + ROUTING_PARKOURS);
    }
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(ParkourAdd);

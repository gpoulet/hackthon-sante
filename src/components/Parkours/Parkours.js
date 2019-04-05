import Parkours from "./Parkours.jsx"
import { connect } from "react-redux";
import { getParkoursByUserId } from "../../store/parkours"
import { getUsers } from "../../store/users";

const mapStateToProps = (state, props) => {
  const userId = props.match.params.userId;
  return {
    parkours: getParkoursByUserId(state, userId),
    user: getUsers(state).filter(user => user.id == userId)[0]
  }
}

export default connect(mapStateToProps)(Parkours)

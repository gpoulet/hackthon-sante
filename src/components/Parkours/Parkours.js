import Parkours from "./Parkours.jsx"
import { connect } from "react-redux";
import { getParkoursByUserId } from "../../store/parkours"

const mapStateToProps = (state,props) => {
    const userId = props.match.params.userId;
    return  {
  parkours : getParkoursByUserId(state, userId)
}}

export default connect(mapStateToProps)(Parkours)
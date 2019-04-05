import Agenda from "./Agenda.jsx"
import { connect } from "react-redux";
import { getParkours } from "../../store/parkours"
import { getUsers } from "../../store/users/index.js";

const mapStateToProps = (state,props) => {
    return  {
  parkours : getParkours(state),
  users : getUsers(state)
}}

export default connect(mapStateToProps)(Agenda)
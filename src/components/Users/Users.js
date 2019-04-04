import Users from "./Users.jsx"
import { connect } from "react-redux";
import { getUsers } from "../../store/users"

const mapStateToProps = state => ({
  users : getUsers(state)
})

export default connect(mapStateToProps)(Users)
import { connect } from "react-redux"
import UserAdd from "./UserAdd.jsx"
import { addUser } from "../../store/users"
import history from "../../history"
import { ROUTING_USERS } from '../../constants'

const mapDispatchToProps = dispatch => ({
  add: user => {
    dispatch(addUser(user))
    history.push(ROUTING_USERS)
  }
})

export default connect(undefined, mapDispatchToProps)(UserAdd)
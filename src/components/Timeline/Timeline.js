import { connect } from "react-redux"
import Timeline from "./Timeline.jsx"
import { getParkoursByParkoursId } from "../../store/parkours"

const mapStateToProps = (state, props) => {
  const parkoursId = props.match.params.parkoursId;
  const userId = props.match.params.userId;
  return {
    timeline: getParkoursByParkoursId(state, parkoursId),
    parkoursId,
    userId
  }
}

export default connect(mapStateToProps)(Timeline)

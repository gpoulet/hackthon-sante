import { connect } from "react-redux"
import Timeline from "./Timeline.jsx"
import { getParkoursByParkoursId } from "../../store/parkours"

const mapStateToProps = (state, { match }) => {
  const parkoursId = match.params.parkoursId;
  return {
    timeline: getParkoursByParkoursId(state, parkoursId)
  }
}

export default connect(mapStateToProps)(Timeline)
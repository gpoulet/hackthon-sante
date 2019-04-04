import { connect } from "react-redux"
import Timeline from "./Timeline.jsx"
import { getParkoursByParkoursId } from "../../store/parkours"

const mapStateToProps = (state, props) => {
  const parkoursId = props.match.params.parkoursId;
  return {
    timeline: getParkoursByParkoursId(state, parkoursId)
  }
}

export default connect(mapStateToProps)(Timeline)
import { connect } from "react-redux"
import TimelineItem from "./TimelineItem.jsx"
import { getParkoursByParkoursIdAndIdEvent } from "../../store/parkours"

const mapStateToProps = (state, { event, parkoursId }) => {
  console.log("event : ", event)
  console.log("parkoursId : ", parkoursId)
  console.log("getParkoursByParkoursIdAndIdEvent(state, event.id, parkoursId) : ", getParkoursByParkoursIdAndIdEvent(state, event.id, parkoursId))
  return {
    documents: getParkoursByParkoursIdAndIdEvent(state, event.id, parkoursId),
    parkoursId
  }
}

export default connect(mapStateToProps)(TimelineItem)
import { connect } from "react-redux";
import Document from "./Document.jsx"
import { getDocumentById } from '../../store/documents'


const mapStateToProps = (state, { id }) => ({
  ...getDocumentById(state, id)
})

export default connect(mapStateToProps)(Document)
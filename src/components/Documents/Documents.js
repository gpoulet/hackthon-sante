import Documents from "./Documents.jsx"
import { connect } from "react-redux";
import {getDocumentsByUserId} from "../../store/documents";

const mapStateToProps = (state,props) => {
    const userId =props.match.params.userId;
    return{
        documents : getDocumentsByUserId(state,userId)
    }}

export default connect(mapStateToProps)(Documents)
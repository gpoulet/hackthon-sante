import DocumentDetail from './DocumentDetail.jsx';

import { connect } from "react-redux";
import {  getDocumentsByUserIdAndId} from "../../store/documents";
const mapStateToProps = (state, props) => {
    const {id,userId} = props.match.params;
    return {
        document: getDocumentsByUserIdAndId(state,userId,id)
    }
};
export default connect(mapStateToProps)(DocumentDetail) ;

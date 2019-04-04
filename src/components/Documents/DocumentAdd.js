import { connect } from "react-redux";
import DocumentAdd from "./DocumentAdd.jsx";
import { addDocument } from "../../store/documents";
import history from "../../history";
import {ROUTING_USERS, ROUTING_DOCUMENTS} from "../../constants";


const mapDispatchToProps = (dispatch, props) => {
  const userId = props.match.params.userId;
  return {
    add: document => {
      dispatch(addDocument(document));
      history.push(ROUTING_USERS+"/"+userId + ROUTING_DOCUMENTS);
    }
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(DocumentAdd);

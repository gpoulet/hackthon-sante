import { connect } from "react-redux";
import DocumentAdd from "./DocumentAdd.jsx";
import { addDocument } from "../../store/documents";
import history from "../../history";
import { ROUTING_DOCUMENTS} from "../../constants";


const mapDispatchToProps = (dispatch) => {
  return {
    add: document => {
      dispatch(addDocument(document));
      history.push(ROUTING_DOCUMENTS);
    }
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(DocumentAdd);

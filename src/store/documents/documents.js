import documentsJson from "../../../data/documents";
import uuidv4 from "uuid/v4";

const ADD_DOCUMENT = "documents/ADD_DOCUMENT";

export const addDocument = payload => ({type:ADD_DOCUMENT,payload})


const initialState = documentsJson;

console.log(documentsJson)

const documents = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOCUMENT:
      const document = {id: uuidv4(), ...action.payload}
      return [...state, document]
    default:
      return state;
  }
};

export default documents;


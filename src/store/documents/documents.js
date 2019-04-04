import documentsJson from "../../../data/documents";

const ADD_DOCUMENT = "documents/ADD_DOCUMENT";

const initialState = documentsJson;

console.log(documentsJson)

const documents = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DOCUMENT:
      return [...state, action.payload]
    default:
      return state;
  }
};

export default documents;


import parkoursJson from "../../../data/parkours.json";

const ADD_PARKOUR = "parkours/ADD_PARKOUR";

const initialState = parkoursJson;

console.log(parkoursJson)

const parkours = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PARKOUR:
      return [...state, action.payload]
    default:
      return state;
  }
};

export default parkours;


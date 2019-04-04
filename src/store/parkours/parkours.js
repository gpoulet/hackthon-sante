import uuidv4 from 'uuid/v4';
import parkoursJson from "../../../data/parkours.json";

const ADD_PARKOUR = "parkours/ADD_PARKOUR";

export const addParkour = payload => ({type:ADD_PARKOUR,payload})

const initialState = parkoursJson;

console.log(parkoursJson)

const parkours = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PARKOUR:
    const parkour = {id: uuidv4(), ...action.payload}
      return [...state, parkour]
    default:
      return state;
  }
};

export default parkours;


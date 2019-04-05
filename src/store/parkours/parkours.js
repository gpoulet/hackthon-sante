import uuidv4 from 'uuid/v4';
import parkoursJson from "../../../data/parkours.json";

const ADD_PARKOUR = "parkours/ADD_PARKOUR";
const ADD_EVENT = "parkours/ADD_EVENT";

export const addParkour = payload => ({type:ADD_PARKOUR,payload})
export const addEvent = payload => ({type:ADD_EVENT,payload})

const initialState = parkoursJson;

console.log(parkoursJson)

const parkours = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PARKOUR:
    const parkour = {id: uuidv4(), ...action.payload}
      return [...state, parkour]
    case ADD_EVENT:
      const event = {...action.payload, id: uuidv4()}
      const parkourState = state.find(parkour => parkour.id === action.payload.parkoursId)
      const modifiedParkour = {...parkourState, events: [ ...parkourState.events, event ]}
      const parkoursWithoutModifiedParkour = state.filter(parkour => parkour.id !== action.payload.parkoursId)
      return [...parkoursWithoutModifiedParkour, modifiedParkour]
    default:
      return state;
  }
};

export default parkours;


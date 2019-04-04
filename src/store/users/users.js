import uuidv4 from 'uuid/v4';
import usersJson from "../../../data/users";

const ADD_USER = "users/ADD_USER";

export const addUser = payload => ({ type: ADD_USER, payload })

const initialState = usersJson;

console.log(usersJson)

const users = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const user = {id: uuidv4(), ...action.payload }
      return [...state, user];
    default:
      return state;
  }
};

export default users;


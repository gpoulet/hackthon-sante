import usersJson from "../../../data/users";

const ADD_USER = "users/ADD_USER";

const initialState = usersJson;

console.log(usersJson)

const users = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload]
    default:
      return state;
  }
};

export default users;


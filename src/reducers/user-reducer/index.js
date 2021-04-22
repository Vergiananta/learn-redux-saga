import { GET_ALL_USERS, GET_ALL_USERS_FAILED, GET_ALL_USERS_SUCCESS } from "../../action";

const form = {}
const initialState = {
  users: [],
  loading: false,
  error: null
}

export function getAllUsers(state = initialState, action) {
  console.log('action.type ',action.type);
  switch (action.type) {
    case GET_ALL_USERS :
      console.log('GET_ALL_USERS');
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_USERS_SUCCESS :
      console.log('GET_ALL_USERS_SUCCESS');
      return {
        ...state, 
        loading: false,
        users: action.result
      };
      case GET_ALL_USERS_FAILED :
        return {
          ...state, 
          loading: false, 
          error: action.error
        }
    default:
      console.log('default');
      return state;
  }
}

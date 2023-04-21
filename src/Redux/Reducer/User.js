import * as type from "../Store/Types";
const initialState = {
  users: [],
  loading: false,
  error: null
};

export default function users(state = initialState, action) {
  //This is my dispatcher it contains two thing intialstate and action.Action tells us what to do
  console.log(action);
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true
      };
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      };
    case type.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    default:
      return state;
  }
}

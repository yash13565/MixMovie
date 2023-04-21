import * as type from "../Store/Types";
export default function getUsers() {
  return {
    type: type.GET_USERS_REQUESTED
  };
}
export function getSearch(query) {
  return {
    type: type.GET_USERS_REQUESTED,
    payload: query
  };
}
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAILED = 'GET_ALL_USERS_FAILED';

export function getUsers() {
  console.log('getUsers');
  return {
    type: GET_ALL_USERS
  }
}

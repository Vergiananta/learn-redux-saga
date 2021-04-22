import { GET_ALL_USERS, GET_ALL_USERS_FAILED, GET_ALL_USERS_SUCCESS } from "../../action";
import { filterFetch } from "../../utils/apiFetch";
import { takeLatest, put } from 'redux-saga/effects'

function* getAllUsersSagas(action) {
  try {
    const result = yield filterFetch('https://gorest.co.in/public-api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 5055aba0fbad9aa69764f8b8d4db123017d72303d326a8861bbb85b260c5b9e2'
      },
      body: JSON.stringify(action.data),
    });
    yield put({
      type: GET_ALL_USERS_SUCCESS,
      result: result
    })
  } catch (e) {
    return {
      type: GET_ALL_USERS_FAILED,
      error: e
    }
  }
}

export function* watchGetAllUsers() {
  yield takeLatest(GET_ALL_USERS, getAllUsersSagas)
}

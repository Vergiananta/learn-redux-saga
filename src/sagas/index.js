import { all, fork } from 'redux-saga/effects'
import { watchGetAllUsers } from "./user-sagas";

export default function* sagas() {
  yield all([
    fork(watchGetAllUsers)
  ])
}

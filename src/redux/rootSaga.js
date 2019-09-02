import { all, fork } from "@redux-saga/core/effects";
import authSagas from "./auth/sagas";
import coursesSagas from "./courses/sagas";
import courseSagas from "./course/sagas";
import remindersSagas from './reminders/sagas';

export default function* () {
  yield all([
    fork(authSagas),
    fork(coursesSagas),
    fork(courseSagas),
    fork(remindersSagas)
  ]);
}

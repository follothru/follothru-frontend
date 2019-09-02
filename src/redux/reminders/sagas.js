import { takeLatest, put, call } from "@redux-saga/core/effects";
import { types, getRemindersFailure, getRemindersSuccess } from "./actions";
import * as courseService from "../../services/courseService";

function* handleGetReminders({ courseId }) {
  try {
    const reminders = yield call(courseService.getRemindersForCourse, courseId);
    yield put(getRemindersSuccess(reminders));
  } catch (err) {
    const error = {
      message: 'Failed to get reminders',
      details: err
    }
    console.error(error);
    yield put(getRemindersFailure(error));
  }
}

export default function* () {
  yield takeLatest(types.GET_REMINDERS, handleGetReminders);
}

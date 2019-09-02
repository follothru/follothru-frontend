import { takeLatest, put, call } from "@redux-saga/core/effects";
import { types, getCourseFailure, getCourseSuccess } from "./actions";
import * as courseService from "../../services/courseService";

function* handleGetCourse({ courseId }) {
  try {
    const course = yield call(courseService.getCourseById, courseId);
    yield put(getCourseSuccess(course));
  } catch (error) {
    const message = 'Failed to load course info';
    console.error(message);
    console.error(error);
    yield put(getCourseFailure({ message, details: error }));
  }
}

export default function* () {
  yield takeLatest(types.GET_COURSE, handleGetCourse);
}

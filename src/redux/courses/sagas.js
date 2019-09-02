import { takeLatest, call, put } from "@redux-saga/core/effects";
import {
  types,
  getCoursesSuccess,
  getCoursesFailure,
  createNewCourseFailure,
  createNewCourseSuccess,
  getCourses
} from "./actions";
import * as courseService from "../../services/courseService";

function* handleGetCourses() {
  try {
    const courses = yield call(courseService.getCourses);
    yield put(getCoursesSuccess(courses));
  } catch (error) {
    const message = 'Failed to load courses';
    console.error(message);
    console.error(error);
    yield put(getCoursesFailure({ message, details: error }));
  }
}

function* handleCreateNewCourse({ name }) {
  try {
    const result = yield call(courseService.createNewCourse, { name });
    yield put(createNewCourseSuccess(result));
    yield put(getCourses());
  }
  catch (error) {
    const message = 'Failed to create course';
    console.error(message);
    console.error(error);
    yield put(createNewCourseFailure(error));
  }
}

export default function* () {
  yield takeLatest(types.GET_COURSES, handleGetCourses);
  yield takeLatest(types.CREATE_NEW_COURSE, handleCreateNewCourse);
}

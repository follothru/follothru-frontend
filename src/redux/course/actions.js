export const types = {
  GET_COURSE: 'course/GET_COURSE',
  GET_COURSE_SUCCESS: 'course/GET_COURSE_SUCCESS',
  GET_COURSE_FAILURE: 'course/GET_COURSE_FAILURE'
};

export const getCourse = courseId => ({
  type: types.GET_COURSE,
  courseId
});

export const getCourseSuccess = course => ({
  type: types.GET_COURSE_SUCCESS,
  course
});

export const getCourseFailure = error => ({
  type: types.GET_COURSE_FAILURE,
  error
});

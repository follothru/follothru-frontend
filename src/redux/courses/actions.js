export const types = {
  GET_COURSES: 'courses/GET_COURSES',
  GET_COURSES_SUCCESS: 'courses/GET_COURSES_SUCCESS',
  GET_COURSES_FAILURE: 'courses/GET_COURSES_FAILURE',
  CREATE_NEW_COURSE: 'courses/CREATE_NEW_COURSE',
  CREATE_NEW_COURSE_SUCCESS: 'courses/CREATE_NEW_COURSE_SUCCESS',
  CREATE_NEW_COURSE_FAILURE: 'courses/CREATE_NEW_COURSE_FAILURE'
};

export const getCourses = () => ({
  type: types.GET_COURSES
});

export const getCoursesSuccess = courses => ({
  type: types.GET_COURSES_SUCCESS,
  courses
});

export const getCoursesFailure = error => ({
  type: types.GET_COURSES_FAILURE,
  error
});

export const createNewCourse = name => ({
  type: types.CREATE_NEW_COURSE,
  name
});

export const createNewCourseSuccess = course => ({
  type: types.CREATE_NEW_COURSE_SUCCESS,
  course
});

export const createNewCourseFailure = error => ({
  type: types.CREATE_NEW_COURSE_FAILURE,
  error
});

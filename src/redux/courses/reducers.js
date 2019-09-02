import { types } from "./actions";

const initialState = {
  courses: [],
  loading: false,
  error: null
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COURSES:
      return { ...state, loading: true, courses: [] };

    case types.GET_COURSES_SUCCESS:
      return { ...state, courses: action.courses, loading: false, error: null };

    case types.GET_COURSES_FAILURE:
      return { ...state, courses: [], loading: false, error: action.error };

    default:
      break;
  }

  return state;
};

export default coursesReducer;

import { types } from "./actions";

const initialState = {
  course: null,
  loading: false,
  error: null
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COURSE:
      return { ...state, loading: true, course: null };

    case types.GET_COURSE_SUCCESS:
      return { ...state, loading: false, course: action.course, error: null };

    case types.GET_COURSE_FAILURE:
      return { ...state, loading: false, course: null, error: action.error };

    default:
      break;
  }

  return state;
};

export default courseReducer;

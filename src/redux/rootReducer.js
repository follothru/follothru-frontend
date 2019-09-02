import { combineReducers } from "redux";
import auth from "./auth/reducers";
import courses from "./courses/reducers";
import course from "./course/reducers";
import reminders from "./reminders/reducers";

export default combineReducers({
  auth,
  courses,
  course,
  reminders
});

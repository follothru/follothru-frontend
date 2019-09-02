import * as client from "./client";

const entity = 'course';

export const getCourses = () =>
  client.doAuthGet(entity);

export const getCourseById = courseId =>
  client.doAuthGet(`${entity}/${courseId}`);

export const getRemindersForCourse = courseId =>
  client.doAuthGet(`${entity}/${courseId}/reminder`);

export const createNewCourse = ({ name }) =>
  client.doAuthPost(`${entity}`, { name });

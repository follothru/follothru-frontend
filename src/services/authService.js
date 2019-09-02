import * as client from "./client";

const target = 'user';

export const signIn = (username, password) =>
  client.doPost(`${target}/login`, { username, password });

export const getUserInfo = () =>
  client.doAuthGet(target);

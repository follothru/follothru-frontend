import { getBackendUrl } from "../config/config";
import * as httpService from "./httpService";

const backendUrl = getBackendUrl();

const makeUrl = target => `${backendUrl}/${target}`;

export const doPost = (target, body, header) =>
  httpService.post(makeUrl(target), body, header);

export const doAuthGet = target =>
  httpService.authGet(makeUrl(target));

export const doAuthPost = (target, body) =>
  httpService.authPost(makeUrl(target), body);

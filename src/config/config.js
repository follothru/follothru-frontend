import urls from "./env";

export const env = process.env.NODE_ENV;

export const getBackendUrl = () => urls[env].serviceUrl;

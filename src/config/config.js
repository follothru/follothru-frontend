import urls from "./env";

const env = process.env.NODE_ENV;

export const getBackendUrl = () => urls[env].serviceUrl;

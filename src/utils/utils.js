import _ from 'lodash';

export const joinUrls = (base, path) => {
  const baseParts = _.split(base, '/');
  const pathParts = _.split(path, '/');
  const result = _.concat(baseParts, pathParts)
    .filter((part, index) => index === 0 || part !== '')
    .join('/');

  return result;
}

export const getScreen = url => {
  const results = url.match(/app\/(.*)/);

  if (!results) {
    return null;
  }

  const path = results[1];
  if (!path) {
    return null;
  }

  return path.split('/')[0];
};

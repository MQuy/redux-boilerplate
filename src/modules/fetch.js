import 'whatwg-fetch'
import simpleStorage from 'simplestorage.js'
import lodash from 'lodash'
import inflection from 'inflection'

export function parseJSON(response) {
  const json = response.json();

  if (response.status >= 200 && response.status < 300) {
    return json;
  } else {
    return json.then(err => Promise.reject(err));
  }
}

export function request(path, params) {
  const currentUser = simpleStorage.get('currentUser') || {};

  params.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Email: currentUser.email,
    Token: currentUser.authenticationToken,
    ...(params.headers || {})
  }
  return fetch(`http://0.0.0.0:3000${path}`, params)
    .then(parseJSON)
    .then(json => normalize(json));
}

export function get(path, params) {
  const normalizeParams = denomailize(params);
  const body = Object.keys(normalizeParams)
                   .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(normalizeParams[key]))
                   .join("&")
                   .replace(/%20/g, "+");

  return request(`${path}?${body}`, { method: 'GET' });
}

export function post(path, params) {
  const body = JSON.stringify(denomailize(params));

  return request(path, { method: 'POST', body });
}

function normalize(data) {
  let results = lodash.isArray(data) ? [] : {};

  lodash.each(data, function(value, key) {
    const nv = lodash.isObject(value) ? normalize(value) : value;
    results[lodash.isNumber(key) ? key : inflection.camelize(key, true)] = nv;
  });

  return results;
}

function denomailize(data) {
  let results = lodash.isArray(data) ? [] : {};

  lodash.each(data, function(value, key) {
    const dnv = lodash.isObject(value) ? denomailize(value) : value;
    results[underscoreKey(key)] = dnv;
  });

  return results;
}

function underscoreKey(key) {
  let udkey;

  if (lodash.isString(key)) {
    udkey = inflection.underscore(key);
    if (lodash.startsWith(key, '_')) udkey = `_${udkey}`;
  } else {
    udkey = key;
  }

  return udkey;
}

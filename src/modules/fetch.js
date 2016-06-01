import 'whatwg-fetch'
import simpleStorage from 'simplestorage.js'
import lodash from 'lodash'
import inflection from 'inflection'

export function parseJSON(response) {
  var json = response.json();

  if (response.status >= 200 && response.status < 300) {
    return json;
  } else {
    return json.then(err => Promise.reject(err));
  }
}

export function request(path, params) {
  let currentUser = simpleStorage.get('currentUser') || {};

  params.headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Email': currentUser.email,
    'Token': currentUser.authenticationToken,
    ...(params.headers || {})
  }
  return fetch(`http://0.0.0.0:3000${path}`, params)
    .then(parseJSON)
    .then(json => normalize(json));
}

export function get(path, params) {
  return request(path, { method: 'GET' });
}

export function post(path, params) {
  let body = JSON.stringify(denomailize(params));

  return request(path, { body: body, method: 'POST' });
}

function normalize(data) {
  var results = lodash.isArray(data) ? [] : {};

  lodash.each(data, function(value, key) {
    var nv = lodash.isObject(value) ? normalize(value) : value;
    results[lodash.isNumber(key) ? key : inflection.camelize(key, true)] = nv;
  });

  return results;

}

function denomailize(data) {
  var results = lodash.isArray(data) ? [] : {};

  lodash.each(data, function(value, key) {
    var dnv = lodash.isObject(value) ? denomailize(value) : value;
    results[underscoreKey(key)] = dnv;
  });

  return results;

}

function underscoreKey(key) {
  var udkey;

  if (lodash.isString(key)) {
    udkey = inflection.underscore(key);
    if (lodash.startsWith(key, '_')) udkey = '_' + udkey;
  } else {
    udkey = key;
  }
  return udkey;
}

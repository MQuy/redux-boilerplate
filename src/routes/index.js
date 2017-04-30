import CoreLayout from '$root/layouts/CoreLayout/CoreLayout'
import Home from './Home'
import Login from './Login'

export const createRoutes = (store) => {
  const routes = [{
    path: '/login',
    ...Login(store)
  }, {
    path: '/',
    component: CoreLayout,
    indexRoute: Home(store)
  }, {
    path: '*',
    getComponent: (_, cb) => {
       import('./NotFound' /* webpackChunkName: "NotFound" */).then(loadRoute(cb)).catch(errorLoading)
    }
  }]

  return routes
}

function errorLoading(err) {
 console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
 return (module) => cb(null, module.default);
}

export default createRoutes

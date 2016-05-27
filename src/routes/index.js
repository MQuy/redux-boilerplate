import CoreLayout from '$root/layouts/CoreLayout/CoreLayout'
import Home from './Home'
import Login from './Login'
import NotFound from './NotFound'

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
    component: NotFound
  }]

  return routes
}

export default createRoutes

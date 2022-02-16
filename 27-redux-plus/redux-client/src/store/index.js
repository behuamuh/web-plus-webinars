import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import shop from './shop/reducer'
import user from './user/reducer'


const reducers = combineReducers({
  shop,
  user
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store;

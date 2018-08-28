import { createStore } from 'redux'
import reducer from './reducer'
// import { State } from '../types'

// const store = createStore<State.StoreState, Action, StoreEnhancer, any>(reducer)
const store = createStore(
    reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
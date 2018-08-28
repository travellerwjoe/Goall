import { State } from '../../types'
import { GET_LIVE } from './action'

const getLiveScore: State.IReducer = (state, action) => ({})

const initialState = {

}

const reducers = {
    [GET_LIVE]: getLiveScore
}

export default function (state: any = initialState, action: State.IAction): State.IReducer {
    return reducers[action.type] ? reducers[action.type].call(null, state, action) : state
}
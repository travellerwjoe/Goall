import { State } from '../../types'

export const GET_LIVE = Symbol('GET_LIVE')

export function getLive(): State.IAction {
    return {
        type: GET_LIVE,
    }
}
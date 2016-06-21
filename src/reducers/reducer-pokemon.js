import { FETCH_POKEMON } from '../actions/index'

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_POKEMON:
      if (!action.payload.data.detail) {
        return [action.payload.data, ...state]
      }
  }
  return state
}

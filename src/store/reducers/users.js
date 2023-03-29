import { RECEIVE_USERS, SELECT_USER } from '../actions/users'
import reduce from 'lodash/reduce'
import get from 'lodash/get'

const initialState = {
  list: [],
  selectedId: null
}

export default function users (state = initialState, action = {}) {
  switch (action.type) {
    case RECEIVE_USERS: {
      const usersById = reduce(
        action.users,
        (accumulator, user) => {
          return {
            ...accumulator,
            [get(user, 'id')]: user
          }
        }, {})

      return {
        ...state,
        list: usersById
      }
    }
    case SELECT_USER: {
      return {
        ...state,
        selectedId: action.id
      }
    }

    default:
      return state
  }
}

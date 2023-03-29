import { RECEIVE_POSTS, RECEIVE_POSTS_BY_USER, RESET_SELECTED_POST_ID, SET_SELECTED_POST_ID } from '../actions/posts'
import reduce from 'lodash/reduce'
import get from 'lodash/get'

const initialState = {
  list: {},
  selectedPostId: null
}

export default function posts (state = initialState, action = {}) {
  switch (action.type) {
    case RECEIVE_POSTS: {
      const postsById = reduce(
        action.posts,
        (accumulator, post) => {
          return {
            ...accumulator,
            [get(post, 'id')]: post
          }
        }, state.list)

      return {
        ...state,
        list: postsById
      }
    }
    case RECEIVE_POSTS_BY_USER: {
      const postsById = reduce(
        action.posts,
        (accumulator, post) => {
          return {
            ...accumulator,
            [get(post, 'id')]: post
          }
        }, {})

      return {
        ...state,
        list: postsById
      }
    }

    case SET_SELECTED_POST_ID: {
      return {
        ...state,
        selectedPostId: action.id
      }
    }
    case RESET_SELECTED_POST_ID: {
      return {
        ...state,
        selectedPostId: initialState
      }
    }
    default:
      return state
  }
}

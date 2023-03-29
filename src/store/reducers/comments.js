import { ADD_COMMENT_TO_POST, RECEIVE_COMMENTS } from '../actions/comments'
import first from 'lodash/first'
import get from 'lodash/get'

export default function comments (state = {}, action = {}) {
  switch (action.type) {
    case RECEIVE_COMMENTS: {
      const postId = get(first(action.comments), 'postId')

      return {
        ...state,
        [postId]: action.comments
      }
    }

    case ADD_COMMENT_TO_POST: {
      const postId = get(action.comment, 'postId')

      return {
        ...state,
        [postId]: [
          ...state[postId],
          action.comment
        ]
      }
    }

    default:
      return state
  }
}

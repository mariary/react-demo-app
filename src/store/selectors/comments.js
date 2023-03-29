import get from 'lodash/fp/get'
import { getSelectedPostId } from './posts'

export const getComments = get('comments')

export const getSelectedPostComments = state => {
  const selectedPostId = getSelectedPostId(state)
  const comments = getComments(state)
  return get(selectedPostId)(comments)
}

export const getCommentsByPostId = state => id => {
  const comments = getComments(state)
  return get(id)(comments)
}

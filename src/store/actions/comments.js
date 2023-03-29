import { fetchRequestWrapper } from '../../helpers/createFetch'
import { getCommentsByPostId } from '../selectors/comments'
import isEmpty from 'lodash/isEmpty'
import { getSelectedPostId } from '../selectors/posts'
import { BASE_URL } from '../../components/App'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENT_TO_POST = 'ADD_COMMENT_TO_POST'

export const fetchCommentsBySelectedPostId = id => (dispatch, getState) => {
  const state = getState()
  const postIdComments = getCommentsByPostId(state)(id)

  if (!isEmpty(postIdComments)) return null

  return dispatch(
    fetchRequestWrapper({
      url: `${BASE_URL}comments?postId=${id}`,
      onSuccess: setComments
    })
  )
}

export const setComments = comments => ({ type: RECEIVE_COMMENTS, comments })

export const postComment = comment => (dispatch, getState) => {
  const state = getState()
  const postId = getSelectedPostId(state)
  return dispatch(
    fetchRequestWrapper({
      url: `${BASE_URL}comments?postId=${postId}`,
      fetchOptions: {
        method: 'POST',
        body: JSON.stringify({ ...comment, postId }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      },
      onSuccess: addCommentToPost
    })
  )
}

export const addCommentToPost = comment => ({ type: ADD_COMMENT_TO_POST, comment })

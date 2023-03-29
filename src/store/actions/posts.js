import { fetchRequestWrapper } from '../../helpers/createFetch'
import { fetchCommentsBySelectedPostId } from './comments'
import isNil from 'lodash/isNil'
import { getPostsList } from '../selectors/posts'
import size from 'lodash/size'
import { BASE_URL } from '../../components/App'
import isNumber from 'lodash/isNumber'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const SET_SELECTED_POST_ID = 'SET_SELECTED_POST_ID'

export const RESET_SELECTED_POST_ID = 'RESET_SELECTED_POST_ID'

export const RECEIVE_POSTS_BY_USER = 'RECEIVE_POSTS_BY_USER'

export const CHUNK_SIZE = 5

export const fetchPosts = () => (dispatch, getState) => {
  const state = getState()
  const len = size(getPostsList(state))
  const fetchedPosts = Math.floor(len) / CHUNK_SIZE + 1
  const limitQuery = `?_page=${fetchedPosts}&_limit=${CHUNK_SIZE}`
  return dispatch(
    fetchRequestWrapper({
      url: `${BASE_URL}posts${limitQuery}`,
      onSuccess: setPosts
    })
  )
}

export const fetchPostsByUserId = id => dispatch => {
  if (!isNumber(id)) {
    dispatch(setPostsByUserId([]))
    return dispatch(fetchPosts())
  }

  const userIdQuery = `?userId=${id}`

  return dispatch(
    fetchRequestWrapper({
      url: `${BASE_URL}posts${userIdQuery}`,
      onSuccess: setPostsByUserId
    })
  )
}

export const setPosts = posts => ({ type: RECEIVE_POSTS, posts })

export const setPostsByUserId = posts => ({ type: RECEIVE_POSTS_BY_USER, posts })

export const setSelectedPostId = id => ({ type: SET_SELECTED_POST_ID, id })

export const resetSelectedPostId = () => ({ type: RESET_SELECTED_POST_ID })

export const selectPost = id => dispatch => {
  if (isNil(id)) {
    return dispatch(resetSelectedPostId())
  }

  dispatch(setSelectedPostId(id))
  dispatch(fetchCommentsBySelectedPostId(id))
}

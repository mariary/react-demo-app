import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'
import { getSelectedPost } from './posts'
import isNumber from 'lodash/isNumber'

export const getUsers = get('users')

export const getUsersList = pipe(getUsers, get('list'))

export const getUserSelectedId = pipe(getUsers, get('selectedId'))

export const hasSelectedUser = pipe(getUserSelectedId, isNumber)

export const getUserById = state => id => pipe(getUsersList, get(id))(state)

export const getUserNameById = state => id => {
  const user = getUserById(state)(id)
  return get('name')(user)
}

export const getUserBySelectedPost = state => {
  const selectedPost = getSelectedPost(state)
  const selectedPostUserId = get('userId')(selectedPost)
  return getUserById(state)(selectedPostUserId)
}

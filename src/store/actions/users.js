import { fetchRequestWrapper } from '../../helpers/createFetch'
import { fetchPostsByUserId } from './posts'
import { BASE_URL } from '../../components/App'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SELECT_USER = 'SELECT_USER'

export const fetchUsers = () =>
  fetchRequestWrapper({
    url: `${BASE_URL}users`,
    onSuccess: setUsers
  })

export const setUsers = users => ({ type: RECEIVE_USERS, users })

export const setSelectedUserId = id => ({ type: SELECT_USER, id })

export const selectUser = id => dispatch => {
  dispatch(setSelectedUserId(id))
  dispatch(fetchPostsByUserId(id))
}

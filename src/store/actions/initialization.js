import { fetchUsers } from './users'
import { fetchPosts } from './posts'

export const initialization = () => async dispatch => {
  await dispatch(fetchUsers())
  await dispatch(fetchPosts())
}

import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'

export const getPosts = get('posts')

export const getPostsList = pipe(getPosts, get('list'))

export const getSelectedPostId = pipe(getPosts, get('selectedPostId'))

export const getSelectedPost = state => {
  const posts = getPostsList(state)
  const selectedPostId = getSelectedPostId(state)
  return get(selectedPostId)(posts)
}

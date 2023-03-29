import { connect } from 'react-redux'
import { getPostsList } from '../../store/selectors/posts'
import ListScreen from './ListScreen'
import {
  getUserNameById,
  getUserSelectedId,
  getUsersList, hasSelectedUser
} from '../../store/selectors/users'
import { selectUser } from '../../store/actions/users'
import { fetchPosts, selectPost } from '../../store/actions/posts'

const mapStateToProps = state => ({
  posts: getPostsList(state),
  getUserNameById: getUserNameById(state),
  users: getUsersList(state),
  selectedId: getUserSelectedId(state),
  hasSelectedUser: hasSelectedUser(state)
})

const mapDispatchToProps = {
  selectUser,
  selectPost,
  fetchPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen)

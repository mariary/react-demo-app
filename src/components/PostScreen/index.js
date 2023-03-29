import { connect } from 'react-redux'
import PostScreen from './PostScreen'
import { selectPost } from '../../store/actions/posts'
import { getSelectedPost } from '../../store/selectors/posts'
import { getUserBySelectedPost } from '../../store/selectors/users'
import { getSelectedPostComments } from '../../store/selectors/comments'
import { postComment } from '../../store/actions/comments'

const mapStateToProps = state => ({
  selectedPost: getSelectedPost(state),
  selectedPostUser: getUserBySelectedPost(state),
  selectedPostComments: getSelectedPostComments(state)
})

const mapDispatchToProps = {
  selectPost,
  postComment
}

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen)

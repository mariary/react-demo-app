import React, { useEffect } from 'react'
import { Container, IconButton } from '@mui/material'
import SelectedPostUser from './SelectedPostUser'
import SelectedPost from './SelectedPost'
import SelectedPostComments from './SelectedPostComments/SelectedPostComments'
import isEmpty from 'lodash/isEmpty'
import { NavLink, useNavigate } from 'react-router-dom'

const ContainerStyle = {
  display: 'grid',
  gridTemplateAreas: "'user post' '. comments'",
  gridTemplateColumns: '200px 500px',
  justifyContent: 'center',
  position: 'relative',
  maxWidth: 800
}

const BackButtonStyle = {
  position: 'absolute'
}

const PostScreen = ({ selectedPost, selectedPostUser, selectedPostComments, postComment }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (isEmpty(selectedPost)) {
      return navigate('/§')
    }
  }, [selectedPost])

  return (
      <Container style={ContainerStyle}>
        <NavLink style={BackButtonStyle} to={'/'}>
          <IconButton aria-label="delete">
           <img src="https://cdn-icons-png.flaticon.com/512/0/340.png" alt="back btn" style={{ width: 20 }}/>
          </IconButton>
        </NavLink>
        <SelectedPostUser user={selectedPostUser}/>
        <SelectedPost post={selectedPost}/>
        <SelectedPostComments comments={selectedPostComments} postComment={postComment}/>
      </Container>
  )
}

export default PostScreen

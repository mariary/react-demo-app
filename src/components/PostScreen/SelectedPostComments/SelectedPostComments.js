import React from 'react'
import styled from 'styled-components'
import CommentItem from './CommentItem'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import { CircularProgress } from '@mui/material'
import AddComment from '../AddComment/AddComment'

const Wrapper = styled.div`
  grid-area: comments;
`

const SelectedPostComments = ({ comments, postComment }) => {
  return (
      <Wrapper>
        {isEmpty(comments) ? <CircularProgress /> : map(comments, comment => <CommentItem comment={comment} key={comment.id}/>)}
        <AddComment postComment={postComment}/>
      </Wrapper>
  )
}

export default SelectedPostComments

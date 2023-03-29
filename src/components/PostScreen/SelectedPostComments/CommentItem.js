import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
import get from 'lodash/get'

const Text = styled.p`
  font-size: 12px;
  margin: 5px 0;
`

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px 0;
  border-bottom: 2px solid #cecece;
  padding: 10px 0;
`

const TextWrapper = styled.div`
  margin-left: 10px;
`

const CommentItem = ({ comment }) => {
  return (
      <Wrapper>
        <Avatar alt="Remy Sharp" src="https://i.pinimg.com/736x/f7/4f/fc/f74ffc83bd539179682fb640a34588ba.jpg" />
        <TextWrapper>
          <a href={`mailto: ${comment.email}`}>{get(comment, 'name')}</a>
          <Text>{get(comment, 'body')}</Text>
        </TextWrapper>
      </Wrapper>
  )
}

export default CommentItem

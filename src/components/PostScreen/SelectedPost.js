import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

const Title = styled.p`
  font-size: 20px;
  margin: 5px 0;
`

const Text = styled.p`
  font-size: 15px;
  margin: 5px 0;
`

const Wrapper = styled.div`
  grid-area: post;
  padding: 10px;
  border-left: 3px solid white;
  background: #eeeeee;
`

const SelectedPost = ({ post }) => {
  return (
      <Wrapper>
        <Title>{get(post, 'title')}</Title>
        <Text>{get(post, 'body')}</Text>
      </Wrapper>
  )
}

export default SelectedPost

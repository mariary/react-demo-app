import React from 'react'
import map from 'lodash/map'
import ListItem from './ListItem'
import { IconButton } from '@mui/material'
import styled from 'styled-components'

const paginationImg = 'https://static.vecteezy.com/system/resources/previews/009/344/473/original/plus-sign-transparent-free-png.png'

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const List = ({ posts, getUserNameById, selectPost, fetchPosts, hasSelectedUser }) => {
  return (
    <div>
      {map(posts, post => (
        <ListItem
          post={post}
          getUserNameById={getUserNameById}
          selectPost={selectPost}
          key={post.id}
        />
      ))}
      {!hasSelectedUser && (
        <ButtonWrapper>
          <IconButton aria-label="pagination" onClick={fetchPosts}>
            <img src={paginationImg} alt="load more" style={{ width: 40 }}/>
          </IconButton>
        </ButtonWrapper>
      )}
    </div>
  )
}

export default List

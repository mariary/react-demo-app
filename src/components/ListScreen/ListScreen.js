import React from 'react'
import List from './List/List'
import { Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import get from 'lodash/get'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'

const ListScreen = ({ posts, getUserNameById, selectUser, users, selectedId, selectPost, fetchPosts, hasSelectedUser }) => {
  const onChange = (e) => {
    const value = e.target.value
    selectUser(value)
  }

  return (
      <Container style={{ display: 'flex', alignItems: 'start', maxWidth: 800 }}>
        <List posts={posts} getUserNameById={getUserNameById} selectPost={selectPost} fetchPosts={fetchPosts} hasSelectedUser={hasSelectedUser}/>
        {!isEmpty(users) && (
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">User</InputLabel>
              <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedId || ''}
                  label="Age"
                  onChange={onChange}
              >
                <MenuItem value={''}>None</MenuItem>
                {map(users, user => <MenuItem value={get(user, 'id')} key={get(user, 'id')}>{get(user, 'name')}</MenuItem>)}
              </Select>
            </FormControl>
        )}
      </Container>
  )
}

export default ListScreen

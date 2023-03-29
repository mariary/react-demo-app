import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, TextField } from '@mui/material'

const StyledForm = styled.form`
 margin-top: -10px;
`

const Row = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 5px;
`

const textAreaStyle = {
  width: 300,
  marginRight: 5
}

const inputStyle = {
  marginRight: 30
}

const setEventValue = func => e => func(e.target.value)

const CommentForm = ({ postComment }) => {
  const [name, setName] = useState(null)
  const [body, setBody] = useState(null)
  const [email, setEmail] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    postComment({ name, body, email, id: Date.now().toString() })
    setName('')
    setBody('')
    setEmail('')
  }

  return (
      <StyledForm onSubmit={onSubmit}>
        <Row>
        <TextField
            required
            label="Email"
            value={email || ''}
            onChange={setEventValue(setEmail)}
            variant='standard'
            style={inputStyle}
        />
        <TextField
            required
            label="Username"
            value={name || ''}
            onChange={setEventValue(setName)}
            variant='standard'
            style={inputStyle}
        />
        </Row>
        <Row>
        <TextField
            required
            label="Comment"
            value={body || ''}
            onChange={setEventValue(setBody)}
            multiline
            variant='standard'
            style={textAreaStyle}
        />
        <Button type={'submit'}>Add comment</Button>
        </Row>
      </StyledForm>
  )
}

export default CommentForm

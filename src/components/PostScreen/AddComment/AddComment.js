import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import CommentForm from './CommentForm'

const accordionStyle = {
  margin: '10px 0 30px'
}

const AddComment = ({ postComment }) => {
  return (
      <Accordion style={accordionStyle}>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          Add comment
        </AccordionSummary>
        <AccordionDetails>
          <CommentForm postComment={postComment}/>
        </AccordionDetails>
      </Accordion>
  )
}

export default AddComment

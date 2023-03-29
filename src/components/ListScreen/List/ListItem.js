import get from 'lodash/get'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Wrapper = styled.div`
  border: 1px solid #000;
  max-width: 600px;
  padding: 10px;
  margin: 10px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  
  &:hover {
    opacity: 0.7;
  }
`

const UserName = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin: 5px 0;
`

const Title = styled.p`
  font-size: 15px;
  margin: 5px 0;
`

const Text = styled.p`
  font-size: 12px;
  margin: 5px 0;
`

const navLinkStyle = {
  textDecoration: 'none',
  color: '#000'
}

const ListItem = ({ post, getUserNameById, selectPost }) => {
  const userName = getUserNameById(get(post, 'userId'))

  const handleClick = () => selectPost(post.id)
  return (
      <NavLink to={'/post'} onClick={handleClick} style={navLinkStyle} key={post.id}>
        <Wrapper key={post.id}>
          <UserName>{userName}</UserName>
          <Title>{post.title}</Title>
          <Text>{post.body}</Text>
        </Wrapper>
      </NavLink>
  )
}

export default ListItem

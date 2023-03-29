import React from 'react'
import styled from 'styled-components'
import get from 'lodash/get'

const Title = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin: 5px 0;
`

const Label = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin: 5px 5px 5px 0;
`

const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin: 5px 0;
`

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  background: #eeeeee;
  padding: 10px;
  grid-area: user;
`

const InfoItem = ({ label, value }) => (
    <InfoWrapper>
      <Label>{label}:</Label>
      <Text>{value}</Text>
    </InfoWrapper>
)

const SelectedPostUser = ({ user }) => {
  return (
      <Wrapper>
        <Title>{get(user, 'name')}</Title>
        <InfoItem label={'email'} value={get(user, 'email')}/>
        <InfoItem label={'phone'} value={get(user, 'phone')}/>
        <InfoItem label={'city'} value={get(user, 'address.city')}/>
        <InfoItem label={'company'} value={get(user, 'company.name')}/>
      </Wrapper>
  )
}

export default SelectedPostUser

import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
 flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 60px;
  gap: 10px;
`
const Title = styled.h1`
  font-size: 24px;
`
const Subtitle = styled.h2`
font-size: 20px;
font-weight: 300;
`
const Input = styled.input`
border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 10px;
  border-radius: 3px;
  width: 100%;
`
const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`
const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`
const Links = styled.div`
margin-left: 50px;
`
const Link = styled.span`
  margin-left: 30px;
`


const SigIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Subtitle>to continue to HenriqueTube</Subtitle>
        <Input placeholder="username"/>
        <Input type='password' placeholder="password"/>
        <Button>Sign in</Button>
        <Title>or</Title>
        <Input placeholder="username"/>
        <Input placeholder="email"/>
        <Input type='password' placeholder="password"/>
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
        <Link>Help</Link>
        <Link>Privacy</Link>
        </Links>
      </More>
    </Container>
  )
}

export default SigIn

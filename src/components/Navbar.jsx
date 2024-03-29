import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { SearchOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Container = styled.div`
position: sticky;
top: 0;
background-color: ${({theme}) => theme.bgLighter};
height: 56px;
`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
height: 100%;
padding: 0px 20px;
position: relative;
`
const Search = styled.div`
width: 40%;
position: absolute;
left: 0;
right: 0;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
border: 1px solid #ccc;
border-radius: 5px;
`
const Input = styled.input`
border: none;
outline: none;
background-color: transparent;
width: 100%;
`
const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`

const Navbar = () => {
  return (
   <Container>
   <Wrapper>
    <Search>
      <Input placeholder="Search"/>
      <SearchOutlined/>
    </Search>
    <Link to="sigin" style={{ textDecoration: 'none', color: 'inherit' }}>
    <Button>
   <AccountCircleOutlinedIcon/>
        SIGN IN
    </Button>
    </Link>
   </Wrapper>
   </Container>
  )
}

export default Navbar

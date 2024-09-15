import React from 'react'
import {Nav,Container,Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './Style.css'

function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><NavLink className='brand' to={'/'}>React-Projects</NavLink></Navbar.Brand>
          <Nav className="me-auto">
          <NavLink className='Linking' to={'/stopwatch'}>StopWatch</NavLink>
          <NavLink className='Linking' to={'/setmatch'}>SetMatch</NavLink>
          <NavLink className='Linking' to={'/todolist'}>ToDoList</NavLink>
          <NavLink className='Linking' to={'/setcountry'}>SetCountry</NavLink>
          <NavLink className='Linking' to={'/deleteonchecked'}>DeleteOnChecked</NavLink>
          <NavLink className='Linking' to={'/tictactoe'}>TicTacToe</NavLink>
          </Nav>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header

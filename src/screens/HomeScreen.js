import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
        <LinkContainer to='/add'>
            <Button>add</Button>
        </LinkContainer>
        <LinkContainer to='/show'>
            <Button>show</Button>
        </LinkContainer>
    </>
  )
}

export default HomeScreen
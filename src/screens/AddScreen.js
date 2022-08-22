import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {Button} from 'react-bootstrap'

const AddScreen = () => {
    return (
        <>
            <LinkContainer to='/'>
                <Button>Go Back</Button>
            </LinkContainer>
            <div>AddScreen</div>
        </>
    )
}

export default AddScreen
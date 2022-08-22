import React, { useState, useEffect } from 'react'
import { Button, Row, Col, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useParams } from 'react-router-dom'
import { tags as tj } from '../mockData'
import axios from 'axios'



const DetailScreen = () => {
    const param = useParams()
    const [tags, setTags] = useState([])
    const [picture, setPicture] = useState({})
    const [picTags,setPicTags] = useState([])
    const id = param.id

    const handleClick = async (name) => {
        setPicTags([...picTags,name])
        let text = picTags.join()
        
        // await axios.post(`/pics/update/${id}/`,   { "tgs": "hello"})
    }

    useEffect(() => {
        const getPicture = async () => {
            const { data } = await axios.get(`/pics/${id}/`)
            setPicture(data)
        }
        const getTags = async () => {
            const {data} = await axios.get('/tags/')
            setTags(data)
        }
        getPicture()
        getTags()
        console.log(tags)
    }, [])


   

    return (
        <>
            <LinkContainer to='/'>
                <Button>Go Back</Button>
            </LinkContainer>
            <Row>
                <Col xs={6}>
                    <Card >
                        <Card.Img src={picture.image} variant='top' />
                        <Card.Body>
                            {/* {picture.tgs} */}
                            {picTags.map(t=><div>{t}</div>)}
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                     {tags.map(t => (<div onClick={()=>handleClick(t.tags)} className='tags'>{t.tags}</div>))} 
                    
                </Col>
            </Row>
        </>
    )
}

export default DetailScreen
import React,{useState,useEffect} from 'react'
import { Button, Row,Col, Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { picture } from '../mockData'
import axios from 'axios'


const ShowScreen = () => {

    const [pictures, setPictures] = useState([])

    useEffect(()=>{
        const getPictures = async() =>{
            const {data} = await axios.get('/pics/')
            setPictures(data)
        }
        getPictures()
        console.log(pictures)
    },[])



    return (
        <>
            <LinkContainer to='/'>
                <Button>Go Back</Button>
            </LinkContainer>




            <Row>
                {pictures.map((p, index) => (
                    <Col sm={12} md={6} lg={4}>
                        <Card  key={index}>
                            <Link to={`/pic/${p.id}`}>
                                <Card.Img src={p.image} variant='top' />
                            </Link>
                            <Card.Body>
                                {}
                            </Card.Body>

                        </Card>
                    </Col>
                ))
                }
            </Row>
        </>
    )
}

export default ShowScreen
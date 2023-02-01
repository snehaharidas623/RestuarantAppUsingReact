import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Image } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Review from './Review';
import { useDispatch, useSelector } from 'react-redux';


function ViewRest() {
    const params = useParams()
    // // console.log(params.id);
    // const [allrestaurent, setAllrestaurent] = useState([])
    // //function to api call for data insidejson file
    // const getrestarentdata = async () => {
    //     await fetch('/restaurants.json')
    //         .then(data => {
    //             data.json()
    //                 .then(result => {
    //                     // console.log(result);
    //                     setAllrestaurent(result.restaurants)
    //                 })
    //         })
    // }
  

    useEffect(() => {
        // getrestarentdata()
    }, [])

    const result = useSelector(state=>state.restaurantReducer)
  const {restaurantList} = result
  const restData=restaurantList.find(item=>item.id==params.id)

    
    return (
        <>
        {restData?(
            <Row>
                <Col>
                <Image className='p-5 '  src={restData.photograph} fluid/>
                </Col>
                <Col>
                <h2 className='mt-5'> {restData.name}</h2>
                <h3 > {restData.neighborhood}</h3>
                <h4 > {restData.cusine_type}</h4>
                <h4 > {restData.address}</h4>
                
                <Operatingtime timedata={restData.operating_hours}/><br></br><br></br>

<Review className="mt-5" reviewData={restData.reviews}/>
                </Col>
            </Row>
        ):'null'}
        </>
    )
   
}

export default ViewRest
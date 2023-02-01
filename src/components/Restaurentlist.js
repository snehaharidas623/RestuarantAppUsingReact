import React from 'react'
import { useEffect} from 'react'
import RestCard from './RestCard'
import Row from 'react-bootstrap/Row';
import { resturantListAction } from '../actions/resturantAction';
import { useDispatch, useSelector } from 'react-redux';
function Restaurentlist() {
  // const [allrestaurent,setAllrestaurent]=useState([])
  //function to api call for data insidejson file
  //   const getrestarentdata=async ()=>{
  //      await fetch('/restaurants.json')
  //      .then(data=>{
  //         data.json()
  //         .then(result=>{
  //         // console.log(result);
  //         setAllrestaurent(result.restaurants)
  //      })
  //   })
  // }

  const dispatch=useDispatch()
  const result=useSelector(state=>state.restaurantReducer)
  const {restaurantList}=result
  useEffect(() => {
    dispatch(resturantListAction())
    // getrestarentdata()

  }, [])
  return (
    <Row>
      {
        restaurantList.map(item => (
          <RestCard data={item} />

        ))
      }
    </Row>
  )
}

export default Restaurentlist
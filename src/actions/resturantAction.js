import axios from "axios";
import { Rsuccess , Rfailure } from "../constants/resturantConstants";

//create async function to api call
 export const resturantListAction = () => async (dispatch)  => {
    try{
  const result=await axios.get('/restaurants.json')
    
  console.log(result.data.restaurants);
  dispatch(
    {
        type:Rsuccess,
        payload:result.data.restaurants
    }
  )
}
catch(error){
    dispatch(

    {
    type:Rfailure,
    error:error
    }
    )

}
 }

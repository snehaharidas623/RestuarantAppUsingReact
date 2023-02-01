import { Action } from "@remix-run/router";
import { Rsuccess,Rfailure } from "../constants/resturantConstants";

//reducer function
 export const restuarantListReducer=(state={restaurantList:[]},action)=>{
    switch(action.type){
        case Rsuccess: 
              return {restaurantList:action.payload}
        case Rfailure: 
                return {resturantList:action.error}
        default:
             return state

    }
}
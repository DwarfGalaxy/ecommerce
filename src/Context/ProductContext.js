import axios from 'axios';
import React, { createContext, useEffect, useReducer } from 'react';
import ProductReducer from '../Components/Reducer/ProductReducer';

export const AppContext=createContext();
const API="https://api.pujakaitem.com/api/products";


const initialState={
  isLoading:false,
  isError:false,
  products:[],
  featureProducts:[]
}
export function ProductContext({children}) {
  const [state, dispatch] = useReducer(ProductReducer,initialState);

  const getProducts=async (url)=>{
    dispatch({type:"SET_LOADING"});
    try{
      const res=await axios.get(url);
      const product =await res.data;
      dispatch({type:"SET_API_DATA",payload:product});
    }catch(error){
      dispatch({type:"SET_ERROR"});
    }
  }

  useEffect(() => {
    getProducts(API);
  }, [])
  
  return (
    <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
  )
}


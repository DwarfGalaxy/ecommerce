import axios from 'axios';
import React, { createContext, useEffect, useReducer } from 'react';
import ProductReducer from '../Components/Reducer/ProductReducer';


export const AppContext=createContext();
const API="https://api.pujakaitem.com/api/products";


const initialState={
  isLoading:false,
  isError:false,
  products:[],
  featureProducts:[],
  isSingleLoading:false,
  SingleItem:{},
  isSingleError:false
}
export function ProductContext({children}) {
  const [state, dispatch] = useReducer(ProductReducer,initialState);

  // Fetching all and featured products
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

  // Fetching singleProduct
  const getSingleProducts=async(url)=>{
    dispatch({type:"SET_SINGLE_LOADING"});
    try{
      const res=await axios.get(url);
      const singleProduct=await res.data;
      dispatch({type:"SET_SINGLE_DATA",payload:singleProduct});
    }catch(error){
      dispatch({type:"SET_SINGLE_ERROR"});
    }
  }
  useEffect(() => {
    getProducts(API);
  }, [])
  
  return (
    <AppContext.Provider value={{...state,getSingleProducts}}>
        {children}
    </AppContext.Provider>
  )
}


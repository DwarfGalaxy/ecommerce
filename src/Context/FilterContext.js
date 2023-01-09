import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import reducer from '../Components/Reducer/FilterReducer';

import { AppContext } from './ProductContext';
export const ProductContext=createContext();

const initialState={
    filter_loading:false,
    filter_products:[],
    all_products:[],
    filter_error:false,
    grid_view:true
}

function FilterContext({children}) {
    const {products} = useContext(AppContext);
    console.log(products);
    const [state, dispatch] = useReducer(reducer,initialState);
    useEffect(() => {
      dispatch({type:"SET_FILTER_LOADING"});
      try{
        dispatch({type:"SET_FILTER_PRODUCTS",payload:[...products]});
      }catch(err){
        dispatch({type:"SET_FILTER_ERROR"});
      }
    }, [products]);
    
    

  return (
    <ProductContext.Provider value={{...state}}>
        {children}
    </ProductContext.Provider>
  )
}

export default FilterContext
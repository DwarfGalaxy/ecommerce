import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import reducer from '../Components/Reducer/FilterReducer';

import { AppContext } from './ProductContext';
export const ProductContext = createContext();

const initialState = {
  filter_loading: false,
  filter_products: [],
  all_products: [],
  filter_error: false,
  grid_view: false,
  sorting_value: "lowest",
  filters: {
    text: ""
  },
  lowestPrice: 0,
  highestPrice: 0
}

function FilterContext({ children }) {
  const { products } = useContext(AppContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "SET_FILTER_LOADING" });
    try {
      dispatch({ type: "SET_FILTER_PRODUCTS", payload: products });
    } catch (err) {
      dispatch({ type: "SET_FILTER_ERROR" });
    }
  }, [products]);




  const setGridView = () => {
    dispatch({ type: "SET_GRID_VIEW" });
  }
  const setListView = () => {
    dispatch({ type: "SET_LIST_VIEW" });
  }

  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  }

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  }

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.sorting_value, products, state.filters]);

  const categorySearch = (currElem) => {
    dispatch({ type: "FILTER_PRODUCTS_WITH_CATEGORY", payload: currElem });
  }
  const categorySearchByColor = (currElem) => {
    console.log("Category search by color");

    dispatch({ type: "FILTER_PRODUCTS_WITH_COLORS", payload: currElem });
  }


  const categorySearchWithCompany = (currElem) => {
    dispatch({ type: "FILTER_PRODUCTS_WITH_COMPANY", payload: currElem });
  }
  const categorySearchByPrice = (currElem) => {
    dispatch({ type: "FILTER_PRODUCTS_WITH_PRICE", payload: currElem });
  }

  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS", payload: products });

  }, [state.sorting_value])


  return (
    <ProductContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, categorySearch, categorySearchWithCompany, categorySearchByColor, categorySearchByPrice }}>
      {children}
    </ProductContext.Provider>
  )
}

export default FilterContext
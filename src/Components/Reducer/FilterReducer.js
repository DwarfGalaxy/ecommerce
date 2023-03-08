const reducer = (state, action) => {
    if (action.type === "SET_FILTER_LOADING") {
        return {
            ...state,
            filter_loading: true
        }
    }
    if (action.type === "SET_FILTER_PRODUCTS") {
        return {
            ...state,
            filter_loading: false,
            filter_products: action.payload,
            all_products: action.payload
        }
    }
    if (action.type === "SET_GRID_VIEW") {
        return {
            ...state,
            grid_view: true
        }
    }
    if (action.type === "SET_LIST_VIEW") {
        return {
            ...state,
            grid_view: false
        }
    }
    if (action.type === "GET_SORT_VALUE") {
        return {
            ...state,
            sorting_value: action.payload
        }
    }
    if (action.type === "SORTING_PRODUCTS") {
        let newSortData;
        let tempSortProduct = [...action.payload];
        const sortingProducts = (a, b) => {
            if (state.sorting_value === "lowest") {
                return a.price - b.price;
            }
            if (state.sorting_value === "highest") {
                return b.price - a.price;
            }

            if (state.sorting_value === "a-z") {
                return a.name.localeCompare(b.name)

            }

            if (state.sorting_value === "z-a") {
                return b.name.localeCompare(a.name)

            }
        }

        newSortData = tempSortProduct.sort(sortingProducts);
        return {
            ...state,
            filter_products: newSortData
        }
    }
    if (action.type === "SET_FILTER_ERROR") {
        return {
            ...state,
            filter_loading: false,
            filter_error: true
        }
    }

    if (action.type === "UPDATE_FILTER_VALUE") {
        const { name, value } = action.payload;
        return {
            ...state,
            filters: {
                ...state.filters,
                [name]: value
            }
        }
    }


    if (action.type === "FILTER_PRODUCTS") {
        let { all_products } = state;
        let tempFilterProduct = [...all_products];
        let { text } = state.filters;

        if (text) {
            tempFilterProduct = tempFilterProduct.filter((currElem) => {
                return currElem.name.toLowerCase().includes(text);
            });
        }
        return {
            ...state,
            filter_products: tempFilterProduct
        }
    }

    if (action.type === "FILTER_PRODUCTS_WITH_CATEGORY") {
        let { all_products } = state;
        let tempFilterProduct = [...all_products];
        if (action.payload != "all") {
            tempFilterProduct = tempFilterProduct.filter((currElem) => {
                return currElem.category.toLowerCase().includes(action.payload);
            });
        }
        return {
            ...state,
            filter_products: tempFilterProduct
        }
    }
    if (action.type === "FILTER_PRODUCTS_WITH_PRICE") {
        let { all_products } = state;
        let tempFilterProduct = [...all_products];
        if (action.payload != 0) {
            tempFilterProduct = tempFilterProduct.filter((currElem) => {
                return currElem.price >= action.payload;
            });
        }
        return {
            ...state,
            filter_products: tempFilterProduct
        }
    }
    if (action.type === "FILTER_PRODUCTS_WITH_COLORS") {
        let { all_products } = state;
        let tempFilterProduct = [...all_products];
        if (action.payload != "all") {
            tempFilterProduct = tempFilterProduct.filter((currElem) => {
                return currElem.colors.includes(action.payload);
            });
        }
        return {
            ...state,
            filter_products: tempFilterProduct
        }
    }

    if (action.type === "FILTER_PRODUCTS_WITH_COMPANY") {
        let { all_products } = state;
        let tempFilterProduct = [...all_products];
        if (action.payload != "all") {
            tempFilterProduct = tempFilterProduct.filter((currElem) => {
                return currElem.company.toLowerCase().includes(action.payload);
            });
        }
        return {
            ...state,
            filter_products: tempFilterProduct
        }
    }



};
export default reducer;
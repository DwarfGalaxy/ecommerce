const reducer=(state,action)=>{
    if(action.type=="SET_FILTER_LOADING"){
        return {
            ...state,
            filter_loading:true
        }
    }else if(action.type=="SET_FILTER_PRODUCTS"){
        return{
            ...state,
            filter_loading:false,
            filter_products:action.payload,
            all_products:action.payload
        }
    }else if(action.type=="SET_GRID_VIEW"){
        return {
            ...state,
            grid_view:true
        }
    }else if(action.type=="SET_LIST_VIEW"){
        return {
            ...state,
            grid_view:false
        }
    }else{
        return {
            ...state,
            filter_loading:false,
            filter_error:true
        }
    }
    
};
export default reducer;
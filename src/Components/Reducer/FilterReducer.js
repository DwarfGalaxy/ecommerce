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
    }else{
        return {
            ...state,
            filter_loading:false,
            filter_error:true
        }
    }
    
};
export default reducer;
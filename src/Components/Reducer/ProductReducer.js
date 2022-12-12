 const ProductReducer=(state,action)=>{
    if(action.type==="SET_LOADING"){
        return {
            ...state,
            isLoading:true
        }
    }else if(action.type==="SET_API_DATA"){
        const featureData=action.payload.filter((newElem)=>{
            return newElem.featured===true;
        })
        return {
            ...state,
            isLoading:false,
            products:action.payload,
            featureProducts:featureData
        }
    }else if(action.type==="SET_SINGLE_LOADING"){
        return{
            ...state,
            isSingleLoading:true
        }
    }else if(action.type==="SET_SINGLE_DATA"){
        return{
            ...state,
            isSingleLoading:false,
            SingleItem:action.payload
        }
    }else if(action.type==="SET_SINGLE_ERROR"){
        return{
            ...state,
            isSingleLoading:false,
            isSingleError:true
        }
    }
    else{
        return {
            ...state,
            isLoading:false,
            isError:true
        }
    }
} 
export default ProductReducer;
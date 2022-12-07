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
    }else{
        return {
            ...state,
            isLoading:false,
            isError:true
        }
    }
} 
export default ProductReducer;
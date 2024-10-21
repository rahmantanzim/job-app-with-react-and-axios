import React, { useEffect, useReducer } from 'react'
import axios from 'axios';
// Define actions
const ACTION = {
    MAKE_REQUEST :'make_request',
    GET_DATA: 'get_data',
    ERROR: 'error'
}
const BASE_URL = 'https://remoteok.com/api';
// Reducer function
const reducer = (state,action) =>{ //reducer function is called everytime we call dispatch
    switch(action.type){
        case ACTION.MAKE_REQUEST:
            return {
                loading: true,
                jobs: [],
                error:''
            }
        case ACTION.GET_DATA:
            return {...state,loading:false, jobs: action.payload.jobs}
        case ACTION.ERROR:
            return {...state,loading:false, error: action.payload.error,jobs:[]}
        default: 
            return state;
    }
}
const useFetchJobs = (params,page) => {
    const initialState = {
        jobs: [],
        loading: false,
        error: ''
    }
    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{
        const cancelToken = axios.CancelToken.source();
        dispatch({type:ACTION.MAKE_REQUEST});
        axios.get(BASE_URL,{cancelToken:cancelToken.token})
        .then((response)=>{
            dispatch({type: ACTION.GET_DATA , payload: {jobs: response.data}})
            console.log(response.data)
        })
        .catch((err)=>{
            if(axios.isCancel(err)){
                return;
            }
            dispatch({ type: ACTION.ERROR, payload: { error: err.message || 'An error occurred' } });
        })
        return ()=>{
            cancelToken.cancel();
        }
    },[params,page]);
  return state;
}

export default useFetchJobs
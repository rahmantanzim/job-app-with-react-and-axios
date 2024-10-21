import React from 'react'
const useFetchJobs = (params,page) => {
  return (
    {
        jobs:[],
        loading:true,
        error:false
    }
  )
}

export default useFetchJobs
import { useState } from 'react';
import './App.css';
import useFetchJobs from './useFetchJobs';
import Job from './Job';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
function App() {
  const [params,setParams] = useState({});
  const [page,setPage] = useState(1);
  const {jobs,loading,error} = useFetchJobs(params,page);
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>ERROR!</h1>}
      <Container>
      <Row>
      {jobs.map((job,index)=>{
        if(index === 0){
          return null;
        }
        return <Job key={job.id} job={job}/> 
      
      })}
      </Row>
    </Container>
    </>
  );
}


// TODO:
// 1. Make card for Job 
// 2. Job Details
// 3. search component
// 4. Filter result
export default App;

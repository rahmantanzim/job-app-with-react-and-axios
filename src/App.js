import { useState } from "react";
import "./App.css";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import JobsPagination from "./JobsPagination";
function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);
  const totalJobs = jobs.length;
  const maxItemsPerPage = 10;
  const itemsPerPage = Math.ceil(totalJobs/maxItemsPerPage);
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>ERROR!</h1>}
      <Container>
        <h1 className="my-5">{jobs.length} jobs available</h1>
        <JobsPagination page={page} setPage={setPage} />
        <Row>
          {jobs.map((job, index) => {
            if (index === 0) {
              return null;
            }
            if(index <= maxItemsPerPage){
              return <Job key={job.id} job={job} />;  
            }
            
          })}
        </Row>
        <JobsPagination page={page} setPage={setPage} />
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

import { useEffect, useState } from "react";
import "./App.css";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import JobsPagination from "./JobsPagination";
function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(3);
  const [hasNextPage,setHasnextPage]= useState(true)
  const { jobs, loading, error } = useFetchJobs(params, page);
  const totalJobs = jobs.length;
  const maxItemsPerPage = 10;
  const lastIndex = page*maxItemsPerPage;
  const startIndex = lastIndex-maxItemsPerPage;
  const currentPageJobs = jobs.slice(1).slice(startIndex, lastIndex);
  const totalPages = Math.floor(totalJobs/maxItemsPerPage);

  useEffect(()=>{
    
      setHasnextPage(page <=totalPages)
    
  },[page,totalPages])
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>ERROR!</h1>}
      <Container>
        <h1 className="my-5">{jobs.length} jobs available</h1>
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        <Row>
          {currentPageJobs.map((job, index) => {
            return <Job key={job.id} job={job} />;  
          })}
        </Row>
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
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

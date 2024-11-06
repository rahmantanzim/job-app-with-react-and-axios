import { useEffect, useState } from "react";
import "./App.css";
import useFetchJobs from "./useFetchJobs";
import Job from "./Job";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import JobsPagination from "./JobsPagination";
import SearchForm from './SearchForm';

function App() {
  const [params, setParams] = useState({ title: '', location: '', full_time: false });
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFetchJobs(params, page);

  const maxItemsPerPage = 10;  // Number of jobs to show per page
  const totalJobs = jobs.length;
  const totalPages = Math.ceil(totalJobs / maxItemsPerPage);

  // Get jobs for the current page
  const currentPageJobs = jobs.slice((page - 1) * maxItemsPerPage, page * maxItemsPerPage);

  const handleParamChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === 'checkbox' ? checked : value;

    setParams(prevParams => ({ ...prevParams, [name]: updatedValue }));
    setPage(1);  // Reset to the first page on new search
  };

  return (
    <Container>
      {/* Search Form */}
      <SearchForm params={params} onParamChange={handleParamChange} />

      {/* Loading and Error Messages */}
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error: {error}</h1>}

      {/* Job Results and Pagination */}
      {!loading && !error && (
        <>
          <h2 className="my-4">{totalJobs} Jobs Found</h2>
          <JobsPagination page={page} setPage={setPage} hasNextPage={page < totalPages} />
          <Row>
            {currentPageJobs.map(job => (
              <Job key={job.id} job={job} />
            ))}
          </Row>
          <JobsPagination page={page} setPage={setPage} hasNextPage={page < totalPages} />
        </>
      )}
    </Container>
  );
}

export default App;

// import { useEffect, useState } from "react";
// import "./App.css";
// import useFetchJobs from "./useFetchJobs";
// import Job from "./Job";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import JobsPagination from "./JobsPagination";
// import SearchForm from './SearchForm';

// function App() {
//   const [params, setParams] = useState({});
//   const [page, setPage] = useState(3);
//   const [hasNextPage,setHasnextPage]= useState(true)
//   const { jobs, loading, error } = useFetchJobs(params, page);
//   const totalJobs = jobs.length;
//   const maxItemsPerPage = 10;
//   const lastIndex = page*maxItemsPerPage;
//   const startIndex = lastIndex-maxItemsPerPage;
//   const currentPageJobs = jobs.slice(1).slice(startIndex, lastIndex);
//   const totalPages = Math.floor(totalJobs/maxItemsPerPage);

//   useEffect(()=>{
//       setHasnextPage(page <=totalPages)
//   },[page,totalPages]);
  
//   const handleParamChange = (e)=>{
//     const param = e.target.name;
//     const val = e.target.value;
//     setPage(1);
//     setParams((prevParam)=>{
//       return {...prevParam, [param]:val}
//     })
//   }
//   return (
//     <>
//       {loading && <h1>Loading...</h1>}
//       {error && <h1>ERROR!</h1>}
//       <Container>
//         <SearchForm params={params} onParamChange={handleParamChange}/>
//       </Container>
//       <Container>
//         <h1 className="my-5">{jobs.length} jobs available</h1>
//         <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
//         <Row>
//           {currentPageJobs.map((job, index) => {
//             return <Job key={job.id} job={job} />;  
//           })}
//         </Row>
//         <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
//       </Container>
//     </>
//   );
// }

// // TODO:
// // 1. Make card for Job
// // 2. Job Details
// // 3. search component
// // 4. Filter result
// export default App;

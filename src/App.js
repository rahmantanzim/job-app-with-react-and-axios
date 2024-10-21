import './App.css';
import useFetchJobs from './useFetchJobs';

function App() {
  const {jobs,loading,error} = useFetchJobs();
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>ERROR!</h1>}
      {<h1>{jobs.length}</h1>}
    </>
  );
}

export default App;


import React from 'react'
import {Pagination} from 'react-bootstrap';

const JobsPagination = ({ page, setPage, hasNextPage }) => {
  const onPageChange = (amount) => {
    setPage((prevPage) => prevPage + amount);
  };

  return (
    <Pagination>
      {page !== 1 && <Pagination.Prev onClick={() => onPageChange(-1)} />}
      {page !== 1 && <Pagination.Item onClick={() => setPage(1)}>{1}</Pagination.Item>}
      {page > 2 && <Pagination.Ellipsis />}
      {page > 2 && <Pagination.Item onClick={() => onPageChange(-1)}>{page - 1}</Pagination.Item>}

      <Pagination.Item active>{page}</Pagination.Item>
      {hasNextPage && <Pagination.Item onClick={() => onPageChange(1)}>{page + 1}</Pagination.Item>}
      {hasNextPage && <Pagination.Next onClick={() => onPageChange(1)} />}
    </Pagination>
  );
};

export default JobsPagination;

// import React from 'react'
// import {Pagination} from 'react-bootstrap';
// const JobsPagination = ({page,setPage,hasNextPage}) => {
//   const onPageChange = (amount)=>{
//     setPage((prevPage)=>{
//       return prevPage+amount;
//     })
//   }
//   return (
//     <Pagination>
//         {page !== 1 && <Pagination.Prev onClick={()=>{onPageChange(-1)}} />}
//         {page !== 1 && <Pagination.Item onClick={()=>{setPage(1)}} >{1}</Pagination.Item>}
//         {page> 2 && <Pagination.Ellipsis />}
//         {page> 2 && <Pagination.Item onClick={()=>{onPageChange(-1)}}>{page-1}</Pagination.Item>}

//         <Pagination.Item active>{page}</Pagination.Item>
//         {hasNextPage && <Pagination.Item onClick={()=>{onPageChange(1)}}>{page+1}</Pagination.Item>}
//         {hasNextPage && <Pagination.Next onClick={()=>{onPageChange(1)}}/>}
//     </Pagination>
//   )
// }

// export default JobsPagination
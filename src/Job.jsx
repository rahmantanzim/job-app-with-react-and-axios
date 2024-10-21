import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Col from "react-bootstrap/Col";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
const Job = ({ job }) => {
    const [open,setOpen] = useState(false);
  const dateStr = job.date;
  const date = new Date(dateStr);
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
  return (
    <Col md={6}>
      <Card className="text-left m-3">
        <Card.Body>
          <div className="d-flex">
            <div>
              <Card.Title>{job.position} - <span className="text-muted font-weight-light small">{job.company}</span></Card.Title>
              <Card.Subtitle>Date Posted: {new Date(job.date).toLocaleDateString()}</Card.Subtitle>
              <Card.Text>
                <p className="font-weight-bold">Location: <span>{job.location}</span> <br/>
                  {job.salary_min > 0 ? `Salary: ${job.salary_max} - ${job.salary_min}$` : null }
                  </p>
              </Card.Text>
              <div className="d-flex gap-2 mb-3">
              <Button variant="primary">Apply now</Button>
              <Button variant="secondary" onClick={()=>{setOpen(prevOpen => ! prevOpen)}}>{!open ? 'See Details' : 'Hide Details'}</Button>
              </div>
              <Collapse in={open}>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{job.description}</ReactMarkdown>
              </Collapse>
            </div>
            {/* <img src={job.logo} srcset="" /> */}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

// {<h3 key={job.id}>{job.position}</h3>}

export default Job;

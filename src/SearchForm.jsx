import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

const inputStyle = {
    boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
    borderRadius: '0px'
}
const formStyle = {
    padding: '30px',
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
}
const SearchForm = ({ params, onParamChange }) => {
  return (
    <Form className="my-5" style={formStyle }>
      <Row className="align-items-center">
        <Col xs={4}>
          <Form.Control type="text" name="title" onChange={onParamChange} value={params.title} placeholder="Job title" style={inputStyle} />
        </Col >
        <Col xs={4}>
          <Form.Control type="text" name="location" onChange={onParamChange} value={params.city} placeholder="Location/city" style={inputStyle} />
        </Col>
        <Col xs={2}>
          <Form.Check
            type="checkbox"
            label="Full time only"
            name="full_time"
            onChange={(e) => onParamChange({ target: { name: 'full_time', value: e.target.checked } })}
            checked={params.full_time || false}
            value={params.full_time}
          />
        </Col>
        <Col>
          <Button type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;

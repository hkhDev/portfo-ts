import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  FloatingLabel,
  Fade,
} from "react-bootstrap";
import "./index.scss";

interface IProp {
  callAPIByTitle: (
    titleInput: string,
    typeInput: string,
    yearInput: string,
    pageNum: number
  ) => void;
  getInputFieldData: any;
}

function SearchBar(props: IProp) {
  const [titleInput, setTitleInput] = useState("");
  const [typeInput, setTypeInput] = useState("");
  const [yearInput, setYearInput] = useState("");
  const [checkTitleInput, setCheckTitleInput] = useState(true);
  const [checkExpand, setCheckExpand] = useState(false);

  function handleTitleChange(e: any) {
    setTitleInput(e.target.value);
    // console.log("titleInput: " + titleInput);
  }

  function handleTypeChange(e: any) {
    e.target.value === "any" ? setTypeInput("") : setTypeInput(e.target.value);
    // console.log("typeInput: " + typeInput);
  }

  function handleYearChange(e: any) {
    e.target.value !== undefined
      ? setYearInput(e.target.value)
      : setYearInput("");
    setYearInput(e.target.value);
    // console.log("yearInput: " + yearInput);
  }

  function buttonClick(e: any) {
    e.preventDefault();
    titleInput === "" ? setCheckTitleInput(false) : submitSearch(e);
  }

  function submitSearch(e: any) {
    props.callAPIByTitle(titleInput, typeInput, yearInput, 1);
    props.getInputFieldData(titleInput, typeInput, yearInput);
    setCheckTitleInput(true);
  }

  function expand() {
    setCheckExpand(true);
  }

  return (
    <Container fluid className="form-body">
      <h1>Looking for Movies?</h1>
      <Form onSubmit={buttonClick} className="form-content">
        <Form.Group>
          <FloatingLabel label="Search by title">
            <Form.Control
              type="text"
              onChange={handleTitleChange}
              onClick={expand}
              placeholder="Search by title"
              className="form-input"
            />
          </FloatingLabel>
          {!checkTitleInput && (
            <Form.Text className="form-title-error-msg">
              Please input the title
            </Form.Text>
          )}
        </Form.Group>
        {checkExpand && (
          <>
            <Row>
              <Col>
                <Form.Group className="form-type">
                  <Form.Label className="form-filter-label">
                    Type (Optional)
                  </Form.Label>
                  <Form.Select
                    onChange={handleTypeChange}
                    defaultValue="Any"
                    className="form-input"
                  >
                    <option value="any">Any</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                    <option value="episode">Episode</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="form-year">
                  <Form.Label className="form-filter-label">
                    Year (Optional)
                  </Form.Label>
                  <Form.Control
                    type="number"
                    onChange={handleYearChange}
                    placeholder="Year"
                    className="form-input"
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="d-grid gap-2">
              <Button
                variant="outline-light"
                type="submit"
                className="form-button"
              >
                Search
              </Button>
            </div>
          </>
        )}
      </Form>
    </Container>
  );
}

export default SearchBar;

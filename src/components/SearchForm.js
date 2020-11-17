import React, { useState, useEffect } from "react";
import EmployeeDisplay from "./EmployeeDisplay.js"

import Row from "./Row.js"

function SearchForm(props) {
  //sort 
  const [sortAscendingBool, setSortAscendingBool] = useState(true);
  //what to search by
  const [nameToSearchBy, setNameToSearchBy] = useState("first-name");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [cheatState, setCheatState] = useState(0);

  function changeSort(event){
    setSortAscendingBool(event.target.value)
  }

  function changeFirstName(event){
    event.preventDefault();

    setFirstName(event.target.value)
  }

  function changeLastName(event){
    event.preventDefault();

    setLastName(event.target.value)
  }

  function changeSearchParameter(event){
    setNameToSearchBy(event.target.value)
  }

  return (
    <form>
      <div className="form-group">
        <Row>
        <div className="col-6">
          <label htmlFor="search-first-name">Search By First Name</label>
          <input
            onChange={changeFirstName}
            value={firstName}
            name="search-first-name"
            type="text"
            className="form-control"
            placeholder="Joe"
            id="search-first-name"
          />
          <br />
        </div>

        <div className="col-6">
          <label htmlFor="search-last-name">Search By Last Name</label>
          <input
            onChange={changeLastName}
            name="search-last-name"
            type="text"
            className="form-control"
            placeholder="Smith"
            id="search-last-name"
          />
          <br />
        </div>
        </Row>
        {/* select search by first, last, or all names*/}
        <Row>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            className="form-check-input"
            name="search-name-type"
            id="first-name"
            value="first-name"
            onChange={changeSearchParameter}
          />
          <label className="form-check-label" htmlFor="first-name">Search First Name || </label>
          <input
            type="radio"
            className="form-check-input"
            name="search-name-type"
            id="last-name"
            value="last-name"
            onChange={changeSearchParameter}
          />
          <label className="form-check-label" htmlFor="last-name">Search Last Name || </label>
          <input
            type="radio"
            className="form-check-input"
            name="search-name-type"
            id="all-name"
            value="all-name"
            onChange={changeSearchParameter}
          />
          <label className="form-check-label" htmlFor="all-name">Search Everyone || </label>
        </div>
        </Row>
        <Row>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            className="form-check-input"
            name="order-type"
            id="ascending"
            value={true}
            onChange={changeSort}
          />
          <label className="form-check-label" htmlFor="ascending">Sort Ascending || </label>
          <input
            type="radio"
            className="form-check-input"
            name="order-type"
            id="descending"
            value={false}
            onChange={changeSort}
          />
          <label className="form-check-label" htmlFor="descending">Sort Descending || </label>
        </div>
        </Row>
        
        <EmployeeDisplay sort={sortAscendingBool} first={firstName} last={lastName} name={nameToSearchBy} cheatState={cheatState} setCheatState={setCheatState} />
      </div>
    </form>
  );
}

export default SearchForm;
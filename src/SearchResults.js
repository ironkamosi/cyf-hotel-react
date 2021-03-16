import React from "react";
import TableBody from "./TableBody";
// table head
const SearchResults = props => {
  // console.log("p results",props.results)
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">firstName</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">roomId</th>
            <th scope="col">checkInDate</th>
            <th scope="col">checkOutDate</th>
          </tr>
        </thead>
        <TableBody results={props.results} />
      </table>{" "}
    </div>
  );
};

export default SearchResults;

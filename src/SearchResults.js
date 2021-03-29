import React, { useState } from "react";
import TableBody from "./TableBody";
import CustomerProfile from "./CustomerProfile";

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
            <th scope="col">NumberOfDays</th>
            <th scope="col">ShowProfile</th>
          </tr>
        </thead>
        {props.results.map((element, index) => {
          return <TableBody key={index} element={element} />;
        })}
      </table>
    </div>
  );
};

export default SearchResults;

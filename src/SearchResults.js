import React, { useState } from "react";
import TableBody from "./TableBody";
import CustomerProfile from "./CustomerProfile";

// table head
const SearchResults = props => {
  const [showProfileState, setShowProfileState] = useState(false); // is a flag to indicate whether the button has been clicked
  const [clientId, setClientId] = useState("");

  const buttonId = event => {
    event.preventDefault();
    // setClientId();
    const currentClientId = event.target.getAttribute("id");
    if (showProfileState && clientId === currentClientId) {
      //set the get attribute
      setShowProfileState(false); // whatever the current value of show profile state this will make it the opposite (toggle)
    } else {
      setShowProfileState(true);
    }
    setClientId(currentClientId);
    /*
    each row for the client has an id
    we set the id for the button
    thus helps indicate the current client
    */
  };

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
          return <TableBody key={index} handler={buttonId} element={element} />;
        })}
      </table>
      {showProfileState ? <CustomerProfile clientId={clientId} /> : null}
    </div>
  );
};

export default SearchResults;

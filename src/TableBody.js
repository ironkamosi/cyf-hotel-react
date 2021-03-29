import React, { useState } from "react";
import moment from "moment";
import diff from "moment";
import CustomerProfile from "./CustomerProfile";

// table body
const TableBody = props => {
  // console.log("table", props);

  const element = props.element;
  // console.log("p element", props.element.id);
  const [highlight, setHighlight] = useState("false");

  const [clientId, setClientId] = useState("");

  const buttonId = event => {
    event.preventDefault();
    setClientId(props.element.id);
    console.log(clientId);
  };

  const colourRow = () => {
    setHighlight(!highlight);
  };

  let enter = moment(element.checkInDate);
  let exit = moment(element.checkOutDate);
  let totalNumDays = exit.diff(enter, "days");

  return (
    <div>
      <tbody>
        <tr
          className={highlight ? null : "highlight-colour"}
          onClick={colourRow}
        >
          <th scope="row">{clientId}</th>
          <td>{element.title}</td>
          <td>{element.firstName}</td>
          <td>{element.surname}</td>
          <td>{element.email}</td>
          <td>{element.roomId}</td>
          <td>{element.checkInDate}</td>
          <td>{element.checkOutDate}</td>
          <td>{totalNumDays}</td>
          <td>{<button onClick={buttonId}>ShowProfile</button>}</td>
        </tr>
      </tbody>
      <CustomerProfile clientId={clientId} />
    </div>
  );
};
export default TableBody;

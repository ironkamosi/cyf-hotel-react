import React, { useState } from "react";
import moment from "moment";
import diff from "moment";
// import CustomerProfile from "./CustomerProfile";

// table body
const TableBody = props => {
  // console.log("table", props);
  const element = props.element;
  // console.log("p element", props.element.id);
  const [highlight, setHighlight] = useState("false");

  const colourRow = () => {
    setHighlight(!highlight);
  };

  let enter = moment(element.checkInDate);
  let exit = moment(element.checkOutDate);
  let totalNumDays = exit.diff(enter, "days");
  // <CustomerProfile clientId={clientId} />;

  return (
    <tbody>
      <tr className={highlight ? null : "highlight-colour"} onClick={colourRow}>
        <th scope="row">{element.id}</th>
        <td>{element.title}</td>
        <td>{element.firstName}</td>
        <td>{element.surname}</td>
        <td>{element.email}</td>
        <td>{element.roomId}</td>
        <td>{element.checkInDate}</td>
        <td>{element.checkOutDate}</td>
        <td>{totalNumDays}</td>
        <td>
          {
            <button id={element.id} onClick={props.handler}>
              ShowProfile
            </button>
          }
        </td>
      </tr>
    </tbody>
  );
};
export default TableBody;

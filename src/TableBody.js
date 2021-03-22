import React, { useState } from "react";
import moment from "moment";
import diff from "moment";

// table body
const TableBody = props => {
  console.log("table", props);

  const element = props.element;

  const [highlight, setHighlight] = useState("false");

  const colourRow = () => {
    setHighlight(!highlight);
  };

  let enter = moment(element.checkInDate);
  let exit = moment(element.checkOutDate);
  let totalNumDays = exit.diff(enter, "days");
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
      </tr>
    </tbody>
  );
};
export default TableBody;

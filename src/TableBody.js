import React from "react";
import moment from "moment";
import diff from "moment";

// table body
const TableBody = props => {
  console.log("p results", props.results);
  return (
    <tbody>
      {props.results.map((element, index) => {
        let enter = moment(element.checkInDate);
        let exit = moment(element.checkOutDate);
        let totalNumDays = exit.diff(enter, "days");

        return (
          <tr key={index}>
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
        );
      })}
    </tbody>
  );
};
export default TableBody;

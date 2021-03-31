import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  // const[error,setError] = useState(false)
  // const [foundData, setFoundData] = useState(false);
  /*if (result.ok) {
       .then(data => {
        // console.log(data);
        setBookings(data);
      }); 
      }
       */

  // useEffect(() => {
  //   fetch(`https://cyf-react.glitch.me/delayed`)
  //     .then(result => result.json())
  //     .then(data => {
  //       // console.log(data);
  //       setBookings(data);
  //     });
  // }, []); // Always remember to put an empty array here!

  const [error, setError] = useState();
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/error")
      .then(res => {
        if (res.status == 200) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then(data => setBookings(data))
      .catch(error => setError(error.message));
  }, []);
  /*
? foundData === true{
  setF
}
*/

  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    // console.log(bookings);

    const filterData = bookings.filter(
      booking =>
        booking.firstName === searchVal || booking.surname === searchVal
    );
    console.log(filterData);
    setBookings(filterData);
  };

  if (error) {
    return (
      <div>
        {" "}
        <h2> Error {error}</h2>
      </div>
    );
  }
  // console.log("test bookings", bookings);

  return bookings.length ? (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
        {/* {error ? <h2 >{error}</h2> : ""} */}
      </div>
    </div>
  ) : (
    <h2>Loading </h2>
  );
};

//   return (
//     <div className="App-content">
//       {bookings ? (
//         <div className="container">
//           <Search search={search} />
//           {!loading ? (
//             <SearchResults results={bookings} />
//           ) : (
//             <span>Loading... Please wait</span>
//           )}
//         </div>
//       ) : (
//         <span>{error}</span>
//       )}
//     </div>
//   );
// }
export default Bookings;

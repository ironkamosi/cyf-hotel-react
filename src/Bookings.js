import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [foundData, setFoundData] = useState(false);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(result => result.json())
      .then(data => {
        // console.log(data);
        setBookings(data);
      });
  }, []); // Always remember to put an empty array here!
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

  // console.log("test bookings", bookings);

  return bookings.length ? (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  ) : (
    <h2>Loading </h2>
  );
};

export default Bookings;

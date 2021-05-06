import React, { useState, useEffect } from "react";
import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

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

  const search = searchVal => {
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

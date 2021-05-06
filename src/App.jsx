import React, { useEffect } from "react";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";
import Footer from "./Footer";
import touristData from "./touristData.json";

let footer = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards touristData={touristData} />
      <Bookings />
      <Restaurant />
      <Footer footerInfo={footer} />
    </div>
  );
};

export default App;

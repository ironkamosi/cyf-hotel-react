import React, { useEffect } from "react";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";
import Footer from "./Footer";
let touristData = [
  {
    city: "Glasgow",
    image:
      "https://images.unsplash.com/photo-1594314490314-6caa383adb14?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=767&q=80",
    link: "https://peoplemakeglasgow.com"
  },
  {
    city: "Manchester",
    image:
      "https://images.unsplash.com/photo-1594314490314-6caa383adb14?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=767&q=80",
    link: "https://visitmanchester.com"
  },
  {
    city: "London",
    image:
      "https://images.unsplash.com/photo-1594314490314-6caa383adb14?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=767&q=80",
    link: "https://visitlondon.com"
  }
];

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

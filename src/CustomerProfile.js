import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [clientEmail, setClientEmail] = useState("");
  const [clientId, setClientId] = useState("");
  const [vip, setVip] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  //   console.log(` fetch cp ${props.clientId}`);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.clientId}`)
      .then(result => result.json())
      .then(data => {
        // console.log("fetch", data);
        setClientId(data.id);
        setClientEmail(data.email);
        setVip(data.vip);
        setPhoneNumber(data.phoneNumber);
      });
  }, [props.clientId]);

  // console.log("Customer props", props)
  return (
    <div>
      <p>{clientId}</p>
      <p>{clientEmail}</p>
      {vip ? <p>VIP</p> : null}
      <p>{phoneNumber}</p>
    </div>
  );
};

export default CustomerProfile;

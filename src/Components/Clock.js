import React, { useState } from "react";
import "./../styles.css";
import AnalogClock from "analog-clock-react";

const Clock = () => {
  const [hours, sethours] = useState(new Date().getHours());
  const [min, setmin] = useState(new Date().getMinutes());
  const [sec, setsec] = useState(new Date().getSeconds());

  setInterval(() => {
    sethours(new Date().getHours());
    setmin(new Date().getMinutes());
    setsec(new Date().getSeconds());
  }, 1000);

  let options = {
    width: "300px",
    heigth: "400px",
    centerColor: "#459cff",

    handColors: {
      second: "#d81c7a",
      minute: "#ffc93c",
      hour: "#ee6f57"
    },
    seconds: sec, // set your
    minutes: min, // own
    hours: hours // time here.
  };

  return (
    <>
      <AnalogClock {...options} />
    </>
  );
};

export default Clock;

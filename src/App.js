import React, { useState, useEffect } from "react";
import "./styles.css";
import Clock from "./Components/Clock";
import Text from "./Components/Text";

const App = () => {
  const [city, setcity] = useState("");
  const [hours, sethours] = useState(new Date().getHours());
  const [min, setmin] = useState(new Date().getMinutes());
  const [sec, setsec] = useState(new Date().getSeconds());

  setInterval(() => {
    sethours(new Date().getHours());
    setmin(new Date().getMinutes());
    setsec(new Date().getSeconds());
  }, 1000);

  const getname = (props) => {
    setcity(props);
  };

  return (
    <>
      <div className="clock">
        <Text getname={getname} />
        {city ? (
          <h1>
            The Time of {city} is {hours}: {min} : {sec}
          </h1>
        ) : (
          ""
        )}
        <Clock />
      </div>
    </>
  );
};

export default App;

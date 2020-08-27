import React from "react";
import "./../styles.css";
import TextField from "@material-ui/core/TextField";

const Text = (props) => {
  const getname = props.getname;
  return (
    <>
      <div className="color">
        <TextField
          style={{ padding: 24 }}
          id="searchInput"
          placeholder="Enter the City"
          margin="normal"
          onChange={(e) => {
            getname(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Text;

import React, { useState } from "react";
import { TextField } from "@mui/material";

function SearchBar(props) {
  const [client, setClient] = useState("");

  const handleInputChange = (e) => {
    setClient(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(client);
    }
  };
  return (
    <TextField
      sx={{ width: "90%", maxWidth: 600, marginY: 1 }}
      id="outlined-search"
      label="Search client"
      type="search"
      value={client}
      onChange={(e) => {
        handleInputChange(e);
      }}
      onKeyDown={(e) => handleSubmit(e)}
    />
  );
}

export default SearchBar;

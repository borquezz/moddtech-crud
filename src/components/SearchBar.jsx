import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../slices/clientsSlice";

function SearchBar(props) {
  // Input text state
  const [input, setInput] = useState("");
  // State stored in redux. Same as input but .toLowerCase()
  const search = useSelector((state) => state.clients.search);
  // Redux dispatch
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInput(e.target.value);
    dispatch(setSearch(e.target.value.toLowerCase()));
  };

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(search);
    }
  };
  return (
    <TextField
      sx={{ width: "90%", maxWidth: 600, marginY: 1 }}
      id="outlined-search"
      label="Search client"
      type="search"
      value={input}
      onChange={(e) => {
        handleInputChange(e);
      }}
      onKeyDown={(e) => handleSubmit(e)}
    />
  );
}

export default SearchBar;

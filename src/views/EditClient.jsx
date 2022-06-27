import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "../components/Header";
import { Grid, TextField, Container } from "@mui/material";
import BackArrow from "../components/BackArrow";
import axios from "../api/axios";

function EditClient() {
  const location = useLocation();
  const [name, setName] = useState(location.state.client.name);
  const [states, setStates] = useState("");
  const [cities, setCities] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [currentCity, setCurrentCity] = useState("");

  const fetchData = async () => {
    // Get all states and cities
    // const statesResponse = await axios.get("/state/get");
    // const citiesResponse = await axios.get("/city/get");
  };

  useEffect(() => {}, []);

  return (
    <>
      <Header title={"EDIT CLIENT"} />
      <Container maxWidth="sm" sx={{ display: "flex" }}>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          marginY={2}
        >
          <BackArrow />
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
      </Container>
      <div onClick={() => console.log(location.state.client)}>Edit Client</div>
    </>
  );
}

export default EditClient;

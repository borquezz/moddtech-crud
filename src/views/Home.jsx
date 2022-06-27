import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import React from "react";
import SearchBar from "../components/SearchBar";
import ClientCard from "../components/ClientCard";
import Header from "../components/Header";
// Axios
import axios from "../api/axios";
// Redux reducers and action handlers
import { useDispatch, useSelector } from "react-redux";
import { setClients } from "../slices/clientsSlice";

function Home() {
  // Clients state from redux
  const clients = useSelector((state) => state.clients.clients);

  const dispatch = useDispatch();

  // Fetch clients endpoint each time the view renders or updates
  useEffect(() => {
    // Define async getClients function
    const getClients = async () => {
      try {
        // Fetch data
        const response = await axios.get("/client/get");
        // Set global clients state to response
        dispatch(setClients(response.data));
      } catch (err) {
        console.error(err);
      }
    };
    // Execute function
    getClients();
    console.log(clients);
  }, [setClients]);

  return (
    <>
      {/* Header */}
      <Header title={"CLIENT APP"} icon={"add"} />
      {/* Searchbar Grid */}
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        marginTop={2}
      >
        <SearchBar placeholder={"Search client"} />
      </Grid>

      {/* Users Grid */}
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {/* Map each client in state to its own client card */}
        {clients.map((client) => {
          return <ClientCard key={client.code} client={client} />;
        })}
      </Grid>
    </>
  );
}

export default Home;

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
  const search = useSelector((state) => state.clients.search);

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

  // Display client cards depending on search state
  const clientList = () => {
    //create a new array by filtering the original array
    const filteredData = clients.filter((client) => {
      //if no input the return the original
      if (search === "") {
        return client;
      }
      //return the item which contains the user input
      else {
        return client.name.toLowerCase().includes(search);
      }
    });
    return filteredData.map((client) => (
      <ClientCard key={client.code} client={client} />
    ));
  };

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

      {/* Clients Grid */}
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {/* Display client list */}
        {clientList()}
      </Grid>
    </>
  );
}

export default Home;

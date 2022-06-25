import { Grid } from "@mui/material";
import React from "react";
import SearchBar from "../components/SearchBar";
import ClientCard from "../components/ClientCard";

function Home() {
  const clients = [
    { name: "Fernando Borquez", code: "ABC123" },
    { name: "John Doe", code: "J2ASJ4" },
    { name: "Greg Foster", code: "IA34N6" },
  ];
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <SearchBar />
        {clients.map((client) => {
          return <ClientCard key={client.code} client={client} />;
        })}
      </Grid>
    </>
  );
}

export default Home;

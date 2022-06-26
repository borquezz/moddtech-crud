import React from "react";
import { useLocation } from "react-router";

function EditClient() {
  const location = useLocation();
  return (
    <div onClick={() => console.log(location.state.client)}>Edit Client</div>
  );
}

export default EditClient;

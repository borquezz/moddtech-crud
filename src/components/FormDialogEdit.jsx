import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// Axios
import axios from "../api/axios";
// Redux hooks & reducers
import { useDispatch } from "react-redux";
import { setClients } from "../slices/clientsSlice";

function FormDialogEdit(props) {
  // Client states
  const [name, setName] = useState(props.client?.name || "");
  const [code, setCode] = useState(props.client?.code || "");

  const [states, setStates] = useState([props.client?.state]);
  const [currentState, setCurrentState] = useState(
    props.client?.state?.code || ""
  );
  const [cities, setCities] = useState([props.client?.city]);
  const [currentCity, setCurrentCity] = useState(
    props.client?.city?.code || ""
  );

  // Initialize dispatch hook
  const dispatch = useDispatch();

  useEffect(() => {
    // Function to fetch states
    const getStates = async () => {
      const response = await axios.get("/state/get");
      setStates(response.data);
    };
    // Function to fetch cities by state
    const getCities = async () => {
      const currentStateObject = states.find(
        (state) => state.code == currentState
      );
      const response = await axios.get(
        `/city/get?idState=${currentStateObject.id}`
      );
      setCities(response.data);
    };

    // Get the available states
    getStates();
    // If there is a state selected, get its cities
    if (currentState) getCities();
    // Run useEffect hook each time currentState changes
  }, [currentState]);

  const handleStateChange = (event) => {
    setCurrentState(event.target.value);
  };
  const handleCityChange = (event) => {
    setCurrentCity(event.target.value);
  };

  const handleSubmit = async (e) => {
    // Get state & city object based on current one
    const stateObj = states.find((state) => state.code === currentState);

    const cityObj = cities.find((city) => city.code === currentCity);

    const response = await axios.put("/client/edit", {
      id: props?.client?.id,
      name,
      code,
      idState: stateObj.id,
      idCity: cityObj.id,
    });
    console.log("Updated Client:", response.data);

    /* Update the clients state */
    // Fetch data
    const clientsResponse = await axios.get("/client/get");
    // Set global clients state to response
    dispatch(setClients(clientsResponse.data));
  };

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          id="code"
          label="Client Code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          fullWidth
          variant="standard"
        />
        <FormControl fullWidth margin="dense">
          <InputLabel id="stateLabel">State</InputLabel>
          <Select
            labelId="stateLabel"
            id="state"
            value={currentState}
            label="State"
            onChange={handleStateChange}
          >
            {states.map((state) => {
              return (
                <MenuItem key={state.id} value={state.code}>
                  {state.code}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl fullWidth margin="dense">
          <InputLabel id="cityLabel">City</InputLabel>
          <Select
            labelId="cityLabel"
            id="city"
            value={currentCity}
            label="City"
            onChange={handleCityChange}
          >
            {cities.map((state) => {
              return (
                <MenuItem key={state.id} value={state.code}>
                  {state.code}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            props.handleClose();
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleSubmit();
            props.handleClose();
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormDialogEdit;

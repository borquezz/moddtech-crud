import { useState } from "react";
// Material UI Components
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
// Material UI Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "../api/axios";
import { useDispatch } from "react-redux";
import { setClients } from "../slices/clientsSlice";
import FormDialogEdit from "./FormDialogEdit";

function Card(props) {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    // Delete client
    const deleteResponse = await axios.put("/client/delete", {
      id: props?.client?.id,
    });
    /* Update the clients state */
    // Fetch data
    const clientsResponse = await axios.get("/client/get");
    // Set global clients state to response
    dispatch(setClients(clientsResponse.data));
  };

  // Get initials from name
  const getInitials = (fullName) => {
    // getInitials("John Doe")
    const initials = fullName
      .split(" ") // => ["John", "Doe"]
      .map((name) => name[0]) // => ["J", "D"]
      .join(""); // => "JD"

    return initials;
  };
  // Possible colors for avatar component
  const avatarColors = [
    "#00AA55",
    "#009FD4",
    "#B381B3",
    "#939393",
    "#E3BC00",
    "#D47500",
    "#DC2A2A",
  ];

  return (
    <ListItem sx={{ width: "90%", maxWidth: 600, marginY: 2, boxShadow: 4 }}>
      <ListItemAvatar>
        <Avatar
          sx={{
            bgcolor:
              avatarColors[
                props.client.name.charCodeAt(0) % avatarColors.length
              ],
          }}
        >
          {getInitials(props.client.name)}
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={props.client.name} />
      <ListItemIcon sx={{ justifyContent: "end" }}>
        <IconButton onClick={handleClickOpen}>
          <EditIcon />
        </IconButton>
      </ListItemIcon>
      <ListItemIcon sx={{ justifyContent: "end" }}>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemIcon>
      <FormDialogEdit
        title="Edit Client"
        client={props.client}
        open={open}
        handleClose={handleClose}
      />
    </ListItem>
  );
}

export default Card;

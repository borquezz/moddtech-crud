import React from "react";
import { useNavigate } from "react-router";
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

function Card(props) {
  const navigate = useNavigate();
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

  // Get initials from name
  const getInitials = (fullName) => {
    // getInitials("John Doe")
    const initials = fullName
      .split(" ") // => ["John", "Doe"]
      .map((name) => name[0]) // => ["J", "D"]
      .join(""); // => "JD"

    return initials;
  };

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
        <IconButton
          onClick={() => navigate("/edit", { state: { client: props.client } })}
        >
          <EditIcon />
        </IconButton>
      </ListItemIcon>
      <ListItemIcon sx={{ justifyContent: "end" }}>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
}

export default Card;

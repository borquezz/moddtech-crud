import { useState } from "react";
// Material UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FaceIcon from "@mui/icons-material/Face";
import AddIcon from "@mui/icons-material/Add";
// Components
import FormDialog from "./FormDialog";

const Header = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="sm" sx={{ display: "flex" }}>
        {/* Logo and Title Container */}
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {/* Logo */}
          <FaceIcon
            sx={{
              display: "flex",
              mr: 1,
            }}
          />
          {/* Title */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              display: "flex",
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {props.title}
          </Typography>
        </Box>
        {/* Add Button */}
        <Box
          sx={{
            display: "flex",
          }}
        >
          {props?.icon === "add" ? (
            <IconButton
              size="large"
              aria-label="add client"
              color="inherit"
              onClick={handleClickOpen}
            >
              <AddIcon />
            </IconButton>
          ) : (
            <></>
          )}
        </Box>
      </Container>
      <FormDialog open={open} handleClose={handleClose} />
    </AppBar>
  );
};
export default Header;

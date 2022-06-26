import * as React from "react";
import { useNavigate } from "react-router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FaceIcon from "@mui/icons-material/Face";
import AddIcon from "@mui/icons-material/Add";

const Header = () => {
  const navigate = useNavigate();

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
            CLIENT APP
          </Typography>
        </Box>
        {/* Add Button */}
        <Box
          sx={{
            display: "flex",
          }}
        >
          <IconButton
            size="large"
            aria-label="add client"
            color="inherit"
            onClick={() => navigate("/add")}
          >
            <AddIcon />
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
};
export default Header;

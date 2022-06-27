import React from "react";
import { IconButton } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router";

function BackArrow() {
  const navigate = useNavigate();
  return (
    <IconButton
      size="large"
      aria-label="go back"
      color="inherit"
      sx={{ alignSelf: "flex-start" }}
      onClick={() => navigate(-1)}
    >
      <ArrowBackRoundedIcon />
    </IconButton>
  );
}

export default BackArrow;

import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon className={classes.icon} />

          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

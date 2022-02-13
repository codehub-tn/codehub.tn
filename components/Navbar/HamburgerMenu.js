import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerMenu from "./DrawerMenu";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <MenuIcon sx={{cursor:'pointer'}} onClick={handleClick} fontSize="large" color="white" />
      <DrawerMenu isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

export default HamburgerMenu;

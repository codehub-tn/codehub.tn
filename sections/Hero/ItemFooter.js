import { Box, Typography } from "@mui/material";
import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const ItemFooter = ({ title, description }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CheckCircleOutlineIcon sx={{width: '3rem', height:'2rem', padding:'0 0.5rem'}}/>
      <Box sx={{ display: "flex", flexDirection: "column" ,p: "0 0.5rem" }}>
        <Typography variant="body1" >
          {title}
        </Typography>
        <Typography variant="body2" sx={{fontWeight:300}}> {description}</Typography>
      </Box>
    </Box>
  );
};

export default ItemFooter;

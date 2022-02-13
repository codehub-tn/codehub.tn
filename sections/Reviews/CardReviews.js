import React from "react";
import { Avatar, Box, Typography, useTheme } from "@mui/material";

const CardReviews = ({witness}) => {
  const theme= useTheme()
  return (
    <Box
      sx={{
        margin: "10px auto",
        padding: "30px",
        maxWidth: "330px",
        mixHeight: "300px",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "30px",
        display: "flex", flexDirection: "column" ,
      }}
    >
     <Box sx={{ mb:'20px', display: "flex" ,alignItems:'center' }}>
        <Avatar alt="avatar" sx={{mr:2}} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography  variant="h6">{witness.name}</Typography>
          <Typography variant="body2">{witness.job}</Typography>
        </Box>
      </Box>

      <Typography variant="body1" >
      {witness.content}
      </Typography>
     
    </Box>
  );
};

export default CardReviews;

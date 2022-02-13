import { Box, useTheme } from "@mui/material";
import React from "react";

const Contact = () => {
  const theme = useTheme();
  return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.727969097781!2d10.62337541522017!3d35.83114948015963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13027501f7a31391%3A0x50dfb49e823c4f1f!2sCode%20Hub%20-%20Coworking%20Space%20Sousse!5e0!3m2!1sfr!2stn!4v1643639557013!5m2!1sfr!2stn"
        loading="lazy"
        style={{ border: "none", width: "100%", height: "300px", marginTop: "64px" }}
      ></iframe>
  );
};

export default Contact;

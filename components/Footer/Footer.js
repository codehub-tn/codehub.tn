import React from "react";
import { Box, Container, Divider, styled, Typography, useTheme } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                mt: 20,
                pb: 4,
            }}
        >
            <Divider variant="middle" sx={{mb:5}} />
            <Container maxWidth="md">
                <Box display="flex" alignItem="center">
                    <LocationOnIcon />
                    <Typography variant="body1" sx={{ ml: 2 }}>
                        7ème étage, Immeuble Jawhara Médicale, Av. du 20 Mars 1956, Sousse 4000
                    </Typography>
                </Box>
                <Box display="flex" alignItem="center">
                    <LocalPhoneIcon />
                    <Typography variant="body1" sx={{ ml: 2 }}>
                        (216) 56 434 555
                    </Typography>
                </Box>
                <Box display="flex" alignItem="center">
                    <MailIcon />
                    <Typography variant="body1" sx={{ ml: 2 }}>
                        contact@codehub.tn
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                    <StyledIcon href="https://www.facebook.com/codehubtn">
                        <FacebookIcon />
                    </StyledIcon>
                    <StyledIcon href="https://www.instagram.com/codehub.coworking" style={{flex:1}}>
                        <InstagramIcon />
                    </StyledIcon>
                    <Typography variant="h7">© 2021 Code Hub, Inc.</Typography>
                </Box>
            </Container>
        </Box>
    );
};

const StyledIcon = styled("a")({
    marginRight:10,
    verticalAlign: "middle",
    "& svg": {
        fontSize: "35px",
        color: "grey",
        cursor: "pointer",
        "&:hover": {
            color: "#fff",
        },
        transition: ".1s",
    },
});

export default Footer;

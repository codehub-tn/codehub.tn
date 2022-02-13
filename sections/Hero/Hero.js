import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import HeroFouter from "./HeroFooter";
// import Image from "../../assets/images/salle.jpg"

const Hero = () => {
    const theme= useTheme()
    return (
        <>
            <Box
                sx={{
                    height: "600px",
                    backgroundImage: `url("https://d252bykl7dkfam.cloudfront.net/kohmakcampus/826e9a21852dfaf0b6591533edd93492.jpg")`,
                    backgroundSize: "cover",
                }}
            >
                <Container maxWidth="lg" sx={{pt:15, pb:20}}>
                    <Typography
                        variant="h4"
                        sx={{
                          maxWidth:"600px",
                          [theme.breakpoints.down('md')]: {
                            fontSize:24
                          },
                          
                        }}
                    >
                        Que vous soyez freelance établie ou une startup en développement, découvrez notre espace et des solutions flexibles pour faire évoluer votre entreprise.
                    </Typography>
                </Container>
            </Box>
            <HeroFouter />
        </>
    );
};

export default Hero;

import { Box, Container, Typography, useTheme, styled } from "@mui/material";
import React from "react";
import HeroFouter from "./HeroFooter";

const Hero = () => {
    const theme = useTheme();
    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    height: "500px",
                }}
            >
                <Background src="https://i.ibb.co/1XMj9s4/home.jpg" loading="lazy" alt="code hub coworking" />
                <Container maxWidth="lg" sx={{ pt: 15, pb: 20 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            color: "white",
                            fontWeight: "500",
                            textShadow: "2px 2px 4px rgb(0 0 0 / 45%)",
                            [theme.breakpoints.down("md")]: {
                                fontSize: 24,
                            },
                            maxWidth: "600px",
                        }}
                    >
                        Que vous soyez freelance établie ou une startup en développement, découvrez notre espace et des
                        solutions flexibles pour faire évoluer votre entreprise.
                    </Typography>
                </Container>
            </Box>
            <HeroFouter />
        </>
    );
};

const Background = styled("img")({
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    zIndex: -1,
    objectFit: "cover",
    objectPosition: "center",
    filter: "brightness(80%)",
});

export default Hero;

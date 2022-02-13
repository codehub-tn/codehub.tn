import { Box, Typography, useTheme, styled } from "@mui/material";

const Header = ({ title, imageUrl }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "450px",
                overflow: "hidden",
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }}
        >
            <Typography
                variant="h3"
                component="h1"
                align="center"
                sx={{
                    color: "white",
                    zIndex: 10,
                    textTransform: "uppercase",
                    textShadow: "2px 2px 4px rgb(0 0 0 / 45%)",
                }}
            >
                {title}
            </Typography>
            <StyledImage src={imageUrl} alt="writing"/>
            <Box
                sx={{
                    position: "absolute",
                    width: "100%",
                    height: "150px",
                    bottom: 0,
                    left: 0,
                    background: `linear-gradient(transparent,${theme.palette.background.default})`,
                }}
            ></Box>
        </Box>
    );
};

const StyledImage = styled("img")({
    objectFit:"cover",
    filter: "brightness(30%)",
    position: "absolute",
    top: 0,
    left: 0,
    width:"100%",
    height:"100%"
})

export default Header;

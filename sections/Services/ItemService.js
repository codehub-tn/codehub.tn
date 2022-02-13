import React from "react";
import { Box, useTheme, Divider, Typography } from "@mui/material";

const ItemService = ({ title, subtitle, svg: SvgComponent }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                [theme.breakpoints.down("md")]: {
                    mb: 5,
                },
            }}
        >
            <SvgComponent />
            <Typography sx={{ mt:1 }} variant="body1" align="center">
                {title}
            </Typography>
            {subtitle && (
                <Typography variant="body2" align="center">
                    {subtitle}
                </Typography>
            )}
            <Divider variant="middle" />
        </Box>
    );
};

export default ItemService;

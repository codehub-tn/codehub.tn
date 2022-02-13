import { Box, Typography } from "@mui/material";
import React from "react";

const SectionContainer = ({ title, children, id, ...rest }) => {
    return (
        <Box component="section" id={id} {...rest}>
            {title && (
                <Typography variant="h4" align="center" mb={2}>
                    {title}
                </Typography>
            )}
            {children}
        </Box>
    );
};

export default SectionContainer;

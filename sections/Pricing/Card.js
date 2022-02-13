import React from "react";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CardDecoration from "../../assets/images/CardDecoration";

const Card = ({
    checked,
    title,
    description,
    pricing,
    features,
    extendedPricing,
    extendedDesc,
}) => {
    const theme = useTheme();
    return (
        <Paper
            elevation={0}
            
            sx={{
                height: 300,
                maxWidth:300,
                mx:"auto",
                borderRadius: "8px",
                backgroundColor: theme.palette.primary.main,
                overflow: "hidden",
            }}
        >
            <TopCard
                checked={checked}
                extendedDesc={extendedDesc}
                extendedPricing={extendedPricing}
                title={title}
                description={description}
                pricing={pricing}
            />
            <CardDecoration
                fill={theme.palette.secondary.main}
                style={{ height: "50px", transform: "translateY(7px)" }}
            />
            <ContentCard features={features} />
        </Paper>
    );
};

const TopCard = ({
    checked,
    title,
    description,
    pricing,
    extendedPricing,
    extendedDesc,
}) => {
    const theme = useTheme();
    // console.log(extendedPricing);
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                p: 2,
            }}
        >
            <Box>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body1">
                    {checked && extendedDesc ? extendedDesc : description}
                </Typography>
            </Box>
            <Box>
                <Typography sx={{ fontSize: "26px" }}>
                    {checked && extendedPricing ? extendedPricing : pricing}dt
                   {extendedPricing &&( <span style={{ fontSize: "12px" }}>/{checked && extendedPricing ? "3 mois" : "mois"}</span>)}
                </Typography>
            </Box>
        </Box>
    );
};

const ContentCard = ({ features }) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                p:1,
                height:"100%",
                backgroundColor: theme.palette.secondary.main,
            }}
        >
            <Box>
                {features.map((el,k) => (
                    <Box
                    key={k}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: "2px",
                        }}
                    >
                        <CheckIcon sx={{ mr: 1 }} />
                        <Typography>{el}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Card;

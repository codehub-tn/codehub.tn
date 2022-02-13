import { Box, Grid, useTheme } from "@mui/material";
import React from "react";
import ItemFooter from "./ItemFooter";

const content = [
    { title: "Accès 24/7", description: "Profitez d'un accès 24/7 en vous abonnant chez nous." },
    { title: "communauté", description: "La communauté chez nous est un de nos piliers. Rien de mieux qu'un bon réseau afin d'avancer." },
    { title: "Confort", description: "Notre espace vous offre toutes commodités et ainsi vous pourrez vous concentrer seulement sur vos objectifs" },
];

const HeroFooter = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: "80%",
                p: 4,
                marginLeft: "auto",
                marginTop:"-80px",
                borderLeft: `4px solid rgba(0,0,0,.2)`,
                borderTopLeftRadius: "6px",
                borderBottomLeftRadius: "6px",
                backgroundColor: theme.palette.primary.main,
            }}
        >
            <Grid container columns={content.length} spacing={2}>
                {content.map((elem,k) => (
                    <Grid key={k} item md={1} xs={content.length}>
                        <ItemFooter 
                            title={elem.title}
                            description={
                                elem.description
                            }
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default HeroFooter;

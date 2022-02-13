import { Container, Divider, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import ItemService from "./ItemService";
import content from "../../content/services";
import SectionContainer from "../../components/SectionContainer";

const Services = () => {
    return (
        <SectionContainer title={"Nos Services"} id={"sectionServices"} sx={{mt:10}}>
            <Container maxWidth="md">
                <Divider variant="middle" />
                <Grid container sx={{ py: 4 }} spacing={4}>
                    {content.map((elem, k) => (
                        <Grid key={k} item md={4} xs={6}>
                            <ItemService svg={elem.icon} title={elem.title} subtitle={elem.subtitle} />
                        </Grid>
                    ))}
                </Grid>
                <Divider variant="middle" />
            </Container>
        </SectionContainer>
    );
};

export default Services;

import React from "react";
import { Box, Grid, ListItem as MuiListItem, ListItemButton, ListItemText, Typography, useMediaQuery, useTheme } from "@mui/material";
import writingImg from "../assets/images/writing.jpg";
import Link from "next/link";

const ListItem = ({ id, title, description, imageUrl }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <MuiListItem sx={{width:"100%", }} >
            <Link href={`/blog/${id}`}>
                <a style={{width:"100%"}}>
                    <ListItemButton sx={{ height: "200px" }}>
                        <Grid container columnSpacing={2}>
                            {!isMobile && <Grid
                                item
                                xs={3}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                            
                                <img
                                    src={imageUrl}
                                    style={{objectFit:'cover', width:'100%'}}
                                    loading="lazy"
                                />
                            </Grid>}
                            <Grid
                                item
                                xs={12}
                                md={9}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Box>
                                    <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
                                        {title}
                                    </Typography>
                                    <Typography variant="body1" component="p">
                                        {description}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </ListItemButton>
                </a>
            </Link>
        </MuiListItem>
    );
};

export default ListItem;

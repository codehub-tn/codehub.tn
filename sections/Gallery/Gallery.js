import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import SectionContainer from "../../components/SectionContainer";
import images from "../../content/gallery";

const Gallery = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <SectionContainer title={"Gallerie"} id={"sectionGallerie"} sx={{ mt: 10 }}>
            <Container maxWidth="md">
                <ImageList variant="masonry" cols={isMobile ? 3 : 4} gap={5}>
                    {images.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=260&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=260&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
        </SectionContainer>
    );
};

export default Gallery;

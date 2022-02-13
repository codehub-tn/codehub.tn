import { Container, IconButton } from "@mui/material";
import * as React from "react";
import Slider from "react-slick";
import styles from "./style.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CardReviews from "./CardReviews";
import SectionContainer from "../../components/SectionContainer";
import reviews from "../../content/reviews";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    const [imageIndex, setImageIndex] = React.useState(0);
    const settings = {
        lazyload: true,
        infinite: true,
        speed: 300,
        autoplaySpeed: 6000,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        pauseOnHover: true,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                },
            },
        ],
    };

    return (
        <SectionContainer title={"Avis"} id={"sectionAvis"} sx={{mt:10}}>
            <Container maxWidth="lg">
                <Slider {...settings}>
                    {reviews.map((witness, idx) => (
                        <span
                            key={idx}
                            className={
                                idx === imageIndex
                                    ? `${styles.slide} ${styles.activeSlide}`
                                    : styles.slide
                            }
                        >
                            <CardReviews witness={witness} />
                        </span>
                    ))}
                </Slider>
            </Container>
        </SectionContainer>
    );
};

const NextArrow = ({ onClick }) => {
    return (
        <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
            <IconButton>
                <ArrowForwardIcon fontSize="large" />
            </IconButton>
        </div>
    );
};
const PrevArrow = ({ onClick }) => {
    return (
        <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
            <IconButton>
                <ArrowBackIcon fontSize="large" />
            </IconButton>
        </div>
    );
};
export default Reviews;

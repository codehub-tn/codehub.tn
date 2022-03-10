import Head from "next/head";
import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const Layout = ({ title, keywords, description, children, sx, ...rest }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords.map((elem) => elem.trim()).join(", ")} />
                <meta name="author" content="Code Hub"></meta>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#121212" />
            </Head>
            <Box component="main" sx={{ minHeight: "100vh", ...sx }} {...rest}>
                {children}
            </Box>
        </>
    );
};

Layout.defaultProps = {
    title: "Code Hub - Coworking space Sousse",
    description:
        "Espace de coworking, refuge pour les créatifs, freelances et startups, avec une vue imprenable sur Sousse.",
    keywords: ["sousse", "coworking", "tunis"],
};

Layout.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
};

export default Layout;

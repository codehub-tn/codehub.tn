import React, { useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../styles/theme";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import * as ga from '../lib/ga'

const App = (props) => {
    const { Component, pageProps } = props;

    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    );
};
export default App;

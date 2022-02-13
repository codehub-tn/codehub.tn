import React from "react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "../utils/createEmotionCache";
import theme from "../styles/theme";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </CacheProvider>
    );
};
export default App;

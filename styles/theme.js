import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#223760",
            contrastText: "rgb(230,230,230)",
        },
        secondary: {
            main: "#b80505",
            contrastText: "#ffffff",
        },
    },
    typography: {
        fontFamily: "'Poppins', sans-serif",
    },
});

export default theme;

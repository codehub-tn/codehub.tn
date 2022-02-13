import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@mui/material";
import { Link as ScrollLink ,scroller} from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";

const smoothScrollProps = {
    smooth: true,
    duration: 500,
};

export default function DrawerMenu({ isOpen, handleClose }) {
    const theme = useTheme();
    const router = useRouter();
    const navigate = (section) => {
        if (router.pathname !== "/") {
            router.push("/").then(setTimeout(() => scroller.scrollTo(section, { smooth: true }), 30));
        }
    };

    return (
        <Drawer anchor={"left"} open={isOpen} onClose={handleClose}>
            <Box
                sx={{
                    height: "100%",
                    width: 250,
                }}
                role="presentation"
            >
                <List sx={{ mt: 8 }}>
                    {["Accueil", "Services", "Tarifs", "Gallerie", "Avis"].map((text, index) => (
                        <div key={index}>
                            <ScrollLink {...smoothScrollProps} to={"section" + text}>
                                <ListItem
                                    onClick={() => {
                                        navigate(`section${text}`);
                                        handleClose();
                                    }}
                                    sx={{
                                        py: 2,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: "20px",
                                    }}
                                    button
                                    key={text}
                                >
                                    {text}
                                </ListItem>
                            </ScrollLink>
                            <Divider variant="middle" sx={{ width: "50%", margin: "0 auto" }} />
                        </div>
                    ))}
                    <Link href="/blog">
                        <a>
                            <ListItem
                                onClick={handleClose}
                                sx={{
                                    py: 2,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    fontSize: "20px",
                                }}
                                button
                            >
                                Blog
                            </ListItem>
                        </a>
                    </Link>
                </List>
            </Box>
        </Drawer>
    );
}

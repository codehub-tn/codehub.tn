import React from "react";
import { Button, Divider, Stack } from "@mui/material";
import { Link as ScrollLink, scroller } from "react-scroll";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const smoothScrollProps = {
    smooth: true,
    duration: 500,
};

const Menu = () => {
    const router = useRouter();
    const navigate = (section) => {
        if (router.pathname !== "/") {
            router.push("/").then(setTimeout(() => scroller.scrollTo(section, { smooth: true }), 30));
        }
    };
    return (
        <Stack direction="row" spacing={1}>
            {["Accueil", "Services", "Tarifs", "Gallerie", "Avis"].map((elem, k) => (
                <ScrollLink
                    key={k}
                    onClick={() => navigate(`section${elem}`)}
                    {...smoothScrollProps}
                    to={"section" + elem}
                >
                    <Button color="inherit">{elem}</Button>
                </ScrollLink>
            ))}
            <Link href="/blog">
                <a>
                    <Button color="inherit">Blog</Button>
                </a>
            </Link>
            <ScrollLink {...smoothScrollProps} to={"sectionContact"}>
                <Button variant="contained">Contact</Button>
            </ScrollLink>
        </Stack>
    );
};

export default Menu;

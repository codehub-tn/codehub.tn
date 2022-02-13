import { Stack, styled, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import React from "react";

const SwitchBtn = ({ checked, handleCheck }) => {
    const controls = useAnimation();
    const animate = () => {
        if (!checked) {
            controls.start({ width: ["30%", "100%", "30%"], x: [0, 0, 60] });
            handleCheck()
        }else{
          controls.start({ width: ["30%", "100%", "30%"], x: [60, 0, 0] });
          handleCheck()
        }
    };
    return (
        <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            alignItems="center"
            sx={{ mt:2, mb: 5 }}
        >
            <Typo>1 mois</Typo>
            <motion.div
                style={{
                    display: "flex",
                    padding: 3,
                    backgroundColor: "grey",
                    width: 90,
                    height: 20,
                    borderRadius: 10,
                    cursor:"pointer"
                }}
                onClick={animate}
            >
                <motion.div
                    style={{
                        width: "30%",
                        height: "100%",
                        borderRadius: 10,
                        backgroundColor: "white",
                    }}
                    animate={controls}
                    transition={{duration:0.55}}
                ></motion.div>
            </motion.div>
            <Typo>3 mois</Typo>
        </Stack>
    );
};

const Typo = styled(Typography)(({ theme }) => ({
    textTransform: "uppercase",
}));

export default SwitchBtn;

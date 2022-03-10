import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { maxString } from "../utils/strings";

const FlippedText = ({ words, duration, delay }) => {
    const d = 60;
    const animationY = [...Array(words.length + 1).keys()].flatMap((elem) => [elem * d, elem * d]).slice(1);
    let handledWords = [...words, words[0]];
    return (
        <Box
            sx={{
                position: "relative",
                display: "inline-block",
                backgroundColor: "#B80505",
                borderRadius: "8px",
                px: 1,
                overflow: "hidden",
                verticalAlign: "top",
            }}
        >
            <motion.div
                animate={{ y: animationY }}
                transition={{ duration: duration, delay: delay ? delay : 0, repeat: Infinity }}
            >
                {handledWords.map((elem, k) => (
                    <div
                        key={k}
                        style={{ position: "absolute", left: "50%", top: -k * d, transform: "translateX(-50%)" }}
                    >
                        {elem}
                    </div>
                ))}
            </motion.div>
            <span style={{ visibility: "hidden", opacity: 0 }}>{maxString(words)}</span>
        </Box>
    );
};

export default FlippedText;

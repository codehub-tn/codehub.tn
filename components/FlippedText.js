import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { maxString } from "../utils/strings";

const FlippedText = ({ words, duration }) => {
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
            <span style={{ visibility: "hidden", opacity: 0 }}>{maxString(words)}</span>
            <motion.div
              initial="initial"
              animate='animate'
              variants
            >
                {words.map((elem, k) => (
                    <motion.div
                        key={k}
                        variants={item}
                        transition={{
                            repeat: Infinity,
                            duration: duration,
                            repeatDelay: (words.length - 1) * duration,
                            delay: k * duration,
                        }}
                        style={{ position: "absolute", top: 0, left: "50%" }}
                    >
                        {elem}
                    </motion.div>
                ))}
            </motion.div>
        </Box>
    );
};

const container = {
  initial: { y: -10 },
  animate: {
    y:0,
    transition: {
      staggerChildren: 0
    }
  }
}

const item = {
  initial: { x: "-50%" },
  animate: { opacity: [0, 1, 1, 1, 0], y: [-60, 0, 0, 0, 60] }
}

export default FlippedText;

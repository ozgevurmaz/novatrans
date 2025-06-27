import { Variants } from "framer-motion";

export const getFadeinContainer = (delay = 0): Variants => ({
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration:1,
            delay,
            staggerChildren: 0.6,
        },
    },
});

export const fadeinItem: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut" },
    },
};

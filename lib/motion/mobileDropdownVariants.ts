import { Variants } from "framer-motion";

export const mobileDropdownVariants: Variants = {
    hidden: {
        opacity: 0,
        height: 0
    },
    visible: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.25,
            ease: "easeOut"
        }
    }
};

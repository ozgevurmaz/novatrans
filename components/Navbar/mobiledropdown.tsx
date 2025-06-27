"use client"

import { mobileDropdownVariants } from "@/lib/motion/mobileDropdownVariants";
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react"

export const MobileDropdown = ({ link, close }: { link: NavigationLinkType, close: () => void }) => {
    const [isMobileServiceOpen, setIsMobileServiceOpen] = useState<boolean>(false);

    if (!link.items) return

    const handleLinkClick = () => {
        console.log("lol")
        close()
        setIsMobileServiceOpen(false);
    };

    return (
        <div>
            <motion.button
                onClick={() => setIsMobileServiceOpen(!isMobileServiceOpen)}
                className="w-full text-left hover:text-primary hover:bg-background px-3 py-2 font-medium flex items-center justify-between transition-colors duration-200 uppercase tracking-wide"
                whileTap={{ scale: 0.98 }}
            >
                {link.name}
                <motion.div
                    animate={{ rotate: isMobileServiceOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="h-4 w-4" />
                </motion.div>
            </motion.button>

            <AnimatePresence>
                {isMobileServiceOpen && (
                    <motion.div
                        variants={mobileDropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="pl-4 space-y-1 overflow-hidden"
                    >
                        {link.items.map((item, itemIndex) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.2,
                                    delay: itemIndex * 0.05
                                }}
                            >
                                <Link
                                    href={`${link.href}${item.href}`}
                                    onClick={() => handleLinkClick()}
                                    className="w-full text-left hover:text-primary hover:bg-background block px-3 py-2 text-sm transition-colors duration-200"
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

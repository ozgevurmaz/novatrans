"use client"

import { dropdownVariants } from '@/lib/motion/dropdownVariants'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const NavLinkWithDropdown = ({ link }: { link: NavigationLinkType }) => {
    const router = useRouter()

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isServiceOpen, setIsServiceOpen] = useState<boolean>(false);
    const [isMobileServiceOpen, setIsMobileServiceOpen] = useState<boolean>(false);

    if (!link.items) return

    const handleLinkClick = (href: string): void => {
        setIsOpen(false);
        setIsMobileServiceOpen(false);
        router.push(href)
    };

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsServiceOpen(true)}
            onMouseLeave={() => setIsServiceOpen(false)}
        >
            <Link
                href={link.href}
                className="hover:text-primary px-3 py-2 flex items-center transition-colors duration-200 "
            >
                {link.name}
                <motion.div
                    animate={{ rotate: isServiceOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="ml-1 h-4 w-4" />
                </motion.div>
            </Link>

            <AnimatePresence>
                {isServiceOpen && (
                    <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute left-0 mt-1 w-48 bg-secondary text-secondary-foreground rounded-md shadow-lg border border-border"
                    >
                        <div className="py-1">
                            {link.items.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.2,
                                        delay: index * 0.05
                                    }}
                                >
                                    <Link
                                        href={`${link.href}${item.href}`}
                                        onClick={() => handleLinkClick(item.href)}
                                        className="block w-full text-left px-4 py-2 hover:bg-background hover:text-primary transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

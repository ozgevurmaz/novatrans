"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { navigationLinks } from '@/lib/constanst';
import { NavLinkWithDropdown } from './navlinkdropdown';
import { mobileMenuVariants } from '@/lib/motion/mobileMenuVariants';
import { MobileDropdown } from './mobiledropdown';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const getNavbarStyles = () => {
    if (!isScrolled) {
      return 'bg-background/20 py-2 md:py-4 lg:py-6 border-b-1 border-primary lg:h-24 text-md text-white';
    } else {
      return 'bg-background/80 backdrop-blur-md border-b border-border py-2';
    }
  };

  const getLogoSize = () => {
    if (!isScrolled) {
      return 'text-3xl';
    } else {
      return 'text-2xl';
    }
  };

  return (
    <motion.nav
      className={`shadow-lg sticky top-0 z-50 transition-all duration-300 font-medium ${getNavbarStyles()}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className={`font-bold text-primary transition-all duration-300 ${getLogoSize()}`}>
              NovaTrans
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden ml-10 md:flex items-baseline space-x-8 uppercase tracking-wide">
            {navigationLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.items ? (
                  <NavLinkWithDropdown link={link} />
                ) : (
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="hover:text-primary px-3 py-2 transition-colors duration-200 relative"
                    >
                      {link.name}
                    </Link>
                  </motion.span>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-primary hover:bg-secondary transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    exit={{ rotate: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-secondary text-secondary-foreground border-t border-border overflow-hidden uppercase tracking-wide"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationLinks.map((link, linkIndex) => (
                <motion.span
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: linkIndex * 0.1
                  }}
                >
                  {link.items ? (
                    <MobileDropdown link={link} close={()=>setIsOpen(false)} />
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => handleLinkClick()}
                      className="w-full text-left hover:text-primary hover:bg-background block px-3 py-2 font-medium transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
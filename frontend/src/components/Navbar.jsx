import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi';
import { assets } from '../assets/assets';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Accueil', href: '#accueil' },
    {
      name: 'Services',
      href: '#services',
      dropdown: [
        { name: 'Emballage & Logistique', href: '#emballage' },
        { name: 'Logistique Express', href: '#express' },
        { name: 'Fret Aérien', href: '#fret-aerien' },
        { name: "Chaîne d'Approvisionnement", href: '#supply-chain' },
      ],
    },
    { name: 'Suivi', href: '#suivi' },
    { name: 'À Propos', href: '#a-propos' },
    { name: 'Contact', href: '#contact' },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25,
      },
    },
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-3 border-b border-primary-200'
            : 'bg-primary-500 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo  */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className={`relative transition-all duration-300 ${
                  isScrolled
                    ? 'bg-white p-2 shadow-md rounded-md'
                    : 'bg-white p-3 shadow-lg rounded-md'
                }`}
              >
                {/* Main logo container */}
                <div className="relative bg-white rounded-md p-1">
                  <img
                    src={assets.SIAB_Logo}
                    alt="SIAB Logistique"
                    className={`transition-all duration-300 ${
                      isScrolled ? 'h-10' : 'h-8'
                    }`}
                  />
                </div>
              </div>
            </motion.div>

            {/* Navigation Bureau - Fixed vertical line issue */}
            <div className="hidden lg:flex items-center space-x-0">
              {navigationItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.a
                    href={item.href}
                    className={`relative px-6 py-3 font-medium transition-all duration-200 ${
                      isScrolled
                        ? 'text-primary-700 hover:text-primary-500 hover:bg-primary-50'
                        : 'text-white hover:text-primary-100 hover:bg-white/10'
                    } flex items-center space-x-1 ${
                      // Remove border from last item and fix Services border issue
                      index < navigationItems.length - 1
                        ? 'border-r border-primary-200/50'
                        : ''
                    }`}
                    whileHover={{ y: -1 }}
                  >
                    <span className="font-semibold">{item.name}</span>
                    {item.dropdown && (
                      <motion.span
                        animate={{
                          rotate: activeDropdown === item.name ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <HiChevronDown className="w-4 h-4 ml-1" />
                      </motion.span>
                    )}
                  </motion.a>

                  {/* Menu Déroulant - Fixed hover gap issue */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute top-full left-0 w-72 bg-white shadow-xl border border-primary-200 overflow-hidden z-50"
                        style={{ marginTop: '0px' }} // Remove any gap that causes the line issue
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <motion.a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-6 py-4 text-primary-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-200 border-b border-primary-100 last:border-b-0 font-medium"
                            whileHover={{ x: 4 }}
                          >
                            {dropdownItem.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button et Sélecteur de Langue */}
            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSelector isScrolled={isScrolled} />
              <motion.button
                className={`px-6 py-3 font-semibold transition-all duration-200 ${
                  isScrolled
                    ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-md'
                    : 'bg-white text-primary-500 hover:bg-primary-50 shadow-lg'
                } rounded-md`}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                Obtenir un Devis
              </motion.button>
            </div>

            {/* Bouton Menu Mobile */}
            <motion.button
              className={`lg:hidden p-2 rounded-lg ${
                isScrolled
                  ? 'text-primary-500 bg-primary-50'
                  : 'text-primary-500 bg-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-primary-200"
            >
              <div className="px-4 py-4 space-y-0">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="block px-4 py-4 text-primary-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-200 font-semibold border-b border-primary-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                    {item.dropdown && (
                      <div className="bg-primary-50 border-b border-primary-100">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-8 py-3 text-sm text-primary-600 hover:text-primary-500 hover:bg-primary-100 transition-all duration-200 border-b border-primary-75 last:border-b-0"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {/* Sélecteur de Langue Mobile */}
                <div className="px-4 py-4 border-b border-primary-100">
                  <LanguageSelector isScrolled={isScrolled} />
                </div>
                <button
                  className="w-full px-4 py-4 bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-all duration-200 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Obtenir un Devis
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Overlay Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/30 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

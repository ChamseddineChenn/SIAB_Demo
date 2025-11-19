import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Hero = () => {
  const handleGetQuote = () => {
    alert('La fonctionnalité de devis sera implémentée ici !');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Image de Fond */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assets.Hero_Image})` }}
      />

      {/* Overlay dégradé */}
      <div className="absolute inset-0 bg-linear-to-b from-primary-500 to-transparent h-32" />

      {/* Overlay sombre pour la lisibilité */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70" />

      {/* Motif géométrique */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(126,79,37,0.1)_50%,transparent_51%)] bg-size-[20px_20px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {/* Titre Principal */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
              LOGISTIQUE DE PRÉCISION
            </h1>
          </motion.div>

          {/* Sous-titre */}
          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-2xl text-white font-bold leading-relaxed max-w-3xl mx-auto tracking-wide">
              Solutions sophistiquées de chaîne d'approvisionnement pour le
              commerce mondial
            </p>
          </motion.div>

          {/* Boutons CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={handleGetQuote}
              className="px-10 py-4 rounded-md bg-white text-primary-500 font-bold text-lg hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl border-2 border-white"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
            >
              DEVIS PERSONNALISÉ
            </motion.button>

            <motion.button
              className="px-10 py-4 rounded-md bg-transparent text-white font-bold text-lg hover:bg-white/10 transition-all duration-200 border-2 border-white hover:border-white/80"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
            >
              SUIVI DE COLIS
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicateur de Défilement */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-8 h-12 border-2 border-white/40 flex justify-center bg-black/20 backdrop-blur-sm rounded-2xl">
          <motion.div
            className="w-1 h-3 bg-white/90 mt-2 rounded-2xl"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* Accents de Coin */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/30"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/30"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/30"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/30"></div>
    </section>
  );
};

export default Hero;

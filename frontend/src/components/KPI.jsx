import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaUsers,
  FaChartLine,
  FaMoneyBillWave,
  FaLandmark,
  FaGlobeAmericas,
  FaShippingFast,
  FaAward,
  FaShieldAlt,
} from 'react-icons/fa';

const KPI = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const kpiData = [
    {
      number: '3 204',
      suffix: '',
      label: 'Collaborateurs',
      description: 'Professionnels dédiés à votre succès',
      icon: FaUsers,
    },
    {
      number: '1,3',
      suffix: "million d'euros",
      label: 'Résultat opérationnel ajusté (EBITA) 2024',
      description: 'Performance financière exceptionnelle',
      icon: FaChartLine,
    },
    {
      number: '3',
      suffix: "milliards d'euros",
      label: "Chiffre d'affaires 2024",
      description: 'Croissance soutenue et durable',
      icon: FaMoneyBillWave,
    },
    {
      number: '26',
      suffix: "milliards d'euros",
      label: 'Capitaux propres fin 2024',
      description: 'Solidité financière et pérennité',
      icon: FaLandmark,
    },
    {
      number: '150+',
      suffix: '',
      label: 'Pays desservis',
      description: 'Couverture mondiale complète',
      icon: FaGlobeAmericas,
    },
    {
      number: '99.7%',
      suffix: '',
      label: 'Taux de livraison à temps',
      description: 'Fiabilité et ponctualité garanties',
      icon: FaShippingFast,
    },
    {
      number: '25+',
      suffix: '',
      label: "Prix d'excellence",
      description: 'Reconnaissance industrielle',
      icon: FaAward,
    },
    {
      number: 'ISO 9001',
      suffix: '',
      label: 'Certification qualité',
      description: 'Standards internationaux',
      icon: FaShieldAlt,
    },
  ];

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
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12,
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-linear-to-br from-primary-50 via-white to-primary-50 relative overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(126,79,37,0.03)_50%,transparent_51%)] bg-size-[60px_60px]"></div>

      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-primary-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-black text-primary-700 mb-4 relative">
              Notre Impact en Chiffres
              {/* Creative underline effect */}
              <div className="absolute -bottom-5 left-0 right-0">
                <div className="h-1 bg-primary-500 w-3/4 mx-auto transform -skew-x-12"></div>
                <div className="h-0.5 bg-primary-300 w-1/2 mx-auto mt-1 transform skew-x-12"></div>
              </div>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-primary-600 max-w-2xl mx-auto font-medium mt-12"
          >
            Des performances exceptionnelles qui témoignent de notre engagement
            envers l'excellence
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {kpiData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white/80 backdrop-blur-sm p-8 hover:bg-white transition-all duration-500 shadow-lg hover:shadow-2xl"
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Creative corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Icon with creative background */}
                <div className="relative flex justify-center mb-6">
                  <div className="relative">
                    {/* Subtle icon background effect */}
                    <div className="absolute inset-0 bg-primary-500/10 transform rotate-45 scale-110 group-hover:rotate-12 group-hover:scale-125 transition-all duration-500"></div>
                    <IconComponent className="w-12 h-12 text-primary-500 relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Number with creative typography */}
                <motion.div className="text-center mb-4 relative">
                  <div className="text-4xl md:text-5xl font-black text-primary-700 leading-tight relative">
                    {item.number}
                    {/* Text shadow effect */}
                    <div className="absolute inset-0 text-primary-700/20 blur-sm transform translate-x-1 translate-y-1">
                      {item.number}
                    </div>
                  </div>

                  {item.suffix && (
                    <div className="text-lg font-bold text-primary-600 mt-2 relative">
                      {item.suffix}
                      <div className="absolute -bottom-1 left-1/4 right-1/4 h-0.5 bg-linear-to-r from-transparent via-primary-400 to-transparent"></div>
                    </div>
                  )}
                </motion.div>

                {/* Label with creative underline */}
                <h3 className="text-lg font-bold text-primary-700 mb-3 text-center leading-tight relative pb-2">
                  {item.label}
                  <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </h3>

                {/* Description with fade-in effect */}
                <p className="text-primary-600 text-sm leading-relaxed font-medium text-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-linear-to-br from-primary-500/0 via-primary-500/5 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Creative separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center items-center mt-16 space-x-8"
        >
          <div className="h-px bg-linear-to-r from-transparent to-primary-500 flex-1"></div>
          <div className="flex items-center space-x-4 px-6 py-3 bg-white/80 backdrop-blur-sm shadow-lg">
            <div className="w-2 h-2 bg-primary-500 animate-pulse"></div>
            <div className="text-primary-700 font-bold text-sm uppercase tracking-wider">
              📊 Données certifiées 2024
            </div>
            <div className="w-2 h-2 bg-primary-500 animate-pulse"></div>
          </div>
          <div className="h-px bg-linear-to-l from-transparent to-primary-500 flex-1"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default KPI;

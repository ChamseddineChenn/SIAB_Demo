import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ShipmentOptions = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const options = [
    {
      id: 1,
      title: 'Standard',
      description:
        'Solution économique parfaite pour les envois non urgents. Délais optimisés avec suivi complet.',
      deliveryTime: '3-7 jours',
      price: 'Économique',
      features: [
        'Suivi de base',
        'Assurance incluse',
        'Délais garantis',
        'Convient pour tous types de marchandises',
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Express',
      description:
        'Livraison accélérée pour les envois urgents. Priorité absolue avec suivi en temps réel.',
      deliveryTime: '24-48h',
      price: 'Competitif',
      features: [
        'Suivi en temps réel',
        'Priorité de traitement',
        'Notification SMS/Email',
        'Livraison garantie',
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Prioritaire',
      description:
        'Service haut de gamme pour les envois critiques. Traitement VIP et délais optimaux.',
      deliveryTime: '12-24h',
      price: 'Premium',
      features: [
        'Traitement VIP',
        'Coordinateur dédié',
        'Preuve de livraison',
        'Support 24/7',
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Fragile',
      description:
        'Emballage spécialisé et manipulation experte pour vos articles délicats et sensibles.',
      deliveryTime: '2-5 jours',
      price: 'Sur mesure',
      features: [
        'Emballage renforcé',
        'Manuel de manipulation',
        'Contrôle température',
        'Transport sécurisé',
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Volumineux',
      description:
        'Solutions spécialisées pour les objets encombrants, lourds ou de dimensions exceptionnelles.',
      deliveryTime: '5-10 jours',
      price: 'Devis personnalisé',
      features: [
        'Équipement spécialisé',
        'Planification logistique',
        'Installation sur site',
        'Gestion des accès',
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
            Options d'Expédition
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto font-medium">
            Choisissez la solution qui correspond parfaitement à vos besoins
            logistiques
          </p>
        </motion.div>

        {/* Grille des Options */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {options.map((option) => (
            <motion.div
              key={option.id}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
              whileHover={{ y: -5 }}
            >
              {/* Header with Icone - Centered Content */}
              <div className="bg-primary-500 p-6 group-hover:bg-primary-600 transition-colors duration-300 text-center relative">
                {/* Icon positioned absolutely to not affect centering */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary-200 group-hover:text-primary-100 transition-colors duration-300">
                  {option.icon}
                </div>

                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                  {/* Centered delivery time and price */}
                  <div className="flex justify-center items-center space-x-6 text-sm">
                    <span className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{option.deliveryTime}</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                        />
                      </svg>
                      <span>{option.price}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6 flex flex-col grow">
                <p className="text-primary-600 mb-6 leading-relaxed text-center grow">
                  {option.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-bold text-primary-700 text-sm uppercase tracking-wide text-center">
                    Inclus :
                  </h4>
                  <ul className="space-y-2">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 shrink-0"></div>
                        <span className="text-primary-600 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  className="w-full mt-6 px-6 py-3 bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-all duration-200 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Choisir cette option
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 bg-white p-8 border border-primary-200 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-primary-700 mb-4">
            Incertain du choix ?
          </h3>
          <p className="text-primary-600 mb-6 max-w-2xl mx-auto">
            Notre équipe d'experts est à votre disposition pour vous recommander
            la solution la plus adaptée à votre situation.
          </p>
          <motion.button
            className="px-10 py-4 bg-primary-500 text-white font-bold text-lg hover:bg-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Obtenir une Recommandation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ShipmentOptions;

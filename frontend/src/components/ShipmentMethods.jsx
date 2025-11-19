import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ShipmentMethods = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const methods = [
    {
      id: 1,
      title: 'Fret Maritime',
      description:
        'Notre service de fret maritime offre une solution économique et fiable pour le transport de marchandises en vrac et de conteneurs. Idéal pour les envois internationaux de grande envergure avec des délais flexibles.',
      features: [
        "Transport de conteneurs 20' et 40'",
        'Marchandises en vrac et palettisées',
        'Couverture mondiale des ports majeurs',
        'Solutions logistiques port-à-port',
      ],
      image:
        'https://unctad.org/sites/default/files/2021-02/2021-02-20_Shipping_1200x675.jpg',
    },
    {
      id: 2,
      title: 'Fret Aérien',
      description:
        'Pour les envois urgents et les marchandises à haute valeur, notre service de fret aérien garantit une livraison rapide et sécurisée dans le monde entier. Parfait pour les délais critiques.',
      features: [
        'Livraison express 24-72 heures',
        'Surveillance en temps réel',
        'Contrôle de température disponible',
        'Assurance cargo incluse',
      ],
      image:
        'https://www.inboundlogistics.com/wp-content/uploads/air-logistics.jpg',
    },
    {
      id: 3,
      title: 'Transport Routier',
      description:
        'Notre réseau terrestre étendu assure une connectivité parfaite pour le transport national et transfrontalier en Europe. Flexibilité maximale pour vos besoins logistiques.',
      features: [
        'Réseau européen complet',
        'Transport groupé disponible',
        'Suivi GPS en temps réel',
        'Livraison porte-à-porte',
      ],
      image:
        'https://worldtradelogistics.com.my/uploads/1/2/7/1/127153297/iiii_orig.jpg',
    },
    {
      id: 4,
      title: 'Solutions Multimodales',
      description:
        'Combinez les avantages de différents modes de transport pour optimiser vos coûts et délais. Notre expertise en logistique multimodale vous offre la solution la plus efficace.',
      features: [
        'Combinaison mer-route-air',
        'Optimisation des coûts',
        'Gestion unique des documents',
        'Solution sur mesure',
      ],
      image:
        'https://rykalogistics.com/content/media/2024/01/Multimodal-Transportation-web-low.jpg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section
      id="methodes"
      className="py-20 bg-white border-t border-b border-primary-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
            Nos Méthodes d'Expédition
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto font-medium">
            Des solutions logistiques complètes adaptées à chaque type de
            marchandise et chaque exigence de délai
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-20"
        >
          {methods.map((method, index) => (
            <motion.div
              key={method.id}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Image - Version nettoyée sans icônes */}
              <div className="lg:w-1/2">
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src={method.image}
                    alt={method.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500"
                  />
                  {/* Overlay de gradient subtil au survol */}
                  <div className="absolute inset-0 bg-linear-to-t from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </motion.div>
              </div>

              {/* Contenu */}
              <div className="lg:w-1/2">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-primary-700 mb-3">
                      {method.title}
                    </h3>
                    <div className="w-20 h-1 bg-primary-500 mb-4 rounded-full"></div>
                  </div>

                  <p className="text-lg text-primary-600 leading-relaxed">
                    {method.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-bold text-primary-700 text-lg">
                      Avantages clés :
                    </h4>
                    <ul className="space-y-2">
                      {method.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                          whileHover={{ x: 5 }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        >
                          <div className="w-2 h-2 bg-primary-500 mt-2 shrink-0 rounded-full"></div>
                          <span className="text-primary-600 font-medium">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    className="px-8 py-3 bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-all duration-200 shadow-md hover:shadow-lg rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    En savoir plus
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-16 bg-linear-to-r from-primary-50 to-primary-100 p-12 border border-primary-200 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-primary-700 mb-4">
            Besoin d'une solution sur mesure ?
          </h3>
          <p className="text-primary-600 mb-6 max-w-2xl mx-auto text-lg">
            Nos experts logistiques sont à votre disposition pour analyser vos
            besoins et vous proposer la méthode d'expédition la plus adaptée.
          </p>
          <motion.button
            className="px-10 py-4 bg-primary-500 text-white font-bold text-lg hover:bg-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl rounded-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Consulter un Expert
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ShipmentMethods;

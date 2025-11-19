import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Fret Maritime', href: '#fret-maritime' },
        { name: 'Fret Aérien', href: '#fret-aerien' },
        { name: 'Transport Routier', href: '#transport-routier' },
        { name: 'Logistique Express', href: '#logistique-express' },
        { name: 'Supply Chain', href: '#supply-chain' },
      ],
    },
    {
      title: 'Entreprise',
      links: [
        { name: 'À Propos', href: '#a-propos' },
        { name: 'Nos Valeurs', href: '#valeurs' },
        { name: 'Carrières', href: '#carrieres' },
        { name: 'Actualités', href: '#actualites' },
        { name: 'Certifications', href: '#certifications' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Suivi Colis', href: '#suivi' },
        { name: "Centre d'Aide", href: '#aide' },
        { name: 'Contact', href: '#contact' },
        { name: 'Devis Express', href: '#devis' },
        { name: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Légal',
      links: [
        { name: 'Mentions Légales', href: '#mentions-legales' },
        { name: 'Politique de Confidentialité', href: '#confidentialite' },
        { name: 'CGV', href: '#cgv' },
        { name: 'Cookies', href: '#cookies' },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: 'Adresse',
      content: 'Zone Portuaire de Rades Saline. BP N°264. 1125 Rades, Tunisie',
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: 'Téléphone',
      content: '(+216) 24 503 505 - (+216) 71 448 490',
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Email',
      content: 'contact@siabplc.com',
    },
    {
      icon: (
        <svg
          className="w-5 h-5"
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
      ),
      title: 'Horaires de Travail',
      content: 'Lun-Ven: 8:00 - 17:00',
    },
  ];

  return (
    <footer className="bg-primary-900 text-white">
      {/* Section Contact Information */}
      <div className="border-b border-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary-700 p-3 rounded-lg">
                    {contact.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary-300 mb-3">
                  {contact.title}
                </h3>
                <p className="text-primary-200 text-sm leading-relaxed">
                  {contact.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Liens Principaux */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo et Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <div className="bg-white p-4 inline-block mb-4 shadow-lg rounded-md">
                <img
                  src={assets.SIAB_Logo}
                  alt="SIAB Logistique"
                  className="h-8"
                />
              </div>
              <p className="text-primary-200 leading-relaxed mb-6 max-w-md">
                SIAB Logistique - Votre partenaire de confiance pour des
                solutions logistiques rapides, précises et fiables à l'échelle
                mondiale.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-primary-300 hover:text-white transition-colors duration-200"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-primary-300 hover:text-white transition-colors duration-200"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-primary-300 hover:text-white transition-colors duration-200"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Sections de liens */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 1) * 0.1 }}
            >
              <h3 className="text-lg font-bold mb-6 text-white border-b border-primary-500 pb-2 inline-block">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-200 hover:text-white transition-colors duration-200 text-sm font-medium hover:translate-x-1 transform"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-300 text-sm">
              © {currentYear} SIAB Logistique. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6 text-sm text-primary-300">
              <span className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-primary-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Solutions Logistiques Certifiées</span>
              </span>
              <span className="text-primary-600">•</span>
              <span>Partenaire de Confiance</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

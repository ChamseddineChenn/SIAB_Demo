import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const ShipmentTrackerSimulator = () => {
  const [activeTab, setActiveTab] = useState('suivi');
  const [trackingId, setTrackingId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [simulationResult, setSimulationResult] = useState(null);
  const [trackingResult, setTrackingResult] = useState(null);

  // État du formulaire de simulation
  const [simulationForm, setSimulationForm] = useState({
    length: '',
    width: '',
    height: '',
    weight: '',
    originCountry: '',
    destinationCountry: '',
    packageType: 'standard',
  });

  // Options de pays
  const countries = [
    'Tunisie',
    'États-Unis',
    'Royaume-Uni',
    'Allemagne',
    'France',
    'Canada',
    'Japon',
    'Australie',
    'Chine',
    'Brésil',
    'Émirats Arabes Unis',
    'Afrique du Sud',
    'Singapour',
  ];

  const packageTypes = [
    { value: 'standard', label: 'Standard', baseCost: 25 },
    { value: 'express', label: 'Express', baseCost: 45 },
    { value: 'priority', label: 'Prioritaire', baseCost: 75 },
    { value: 'fragile', label: 'Fragile', baseCost: 35 },
    { value: 'oversized', label: 'Volumineux', baseCost: 60 },
  ];

  const handleTrackShipment = (e) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      // Données de suivi simulées
      const mockTrackingData = {
        id: trackingId,
        status: Math.random() > 0.3 ? 'en_transit' : 'livré',
        currentLocation: 'Centre de Distribution - Dubaï',
        origin: 'Shanghai, Chine',
        destination: 'Dubaï, Émirats Arabes Unis',
        estimatedDelivery: '15/02/2024',
        timeline: [
          {
            date: '10/02/2024 08:30',
            status: "Colis reçu à l'entrepôt",
            location: 'Shanghai',
          },
          {
            date: '11/02/2024 14:20',
            status: "Départ de l'origine",
            location: 'Shanghai',
          },
          {
            date: '12/02/2024 09:15',
            status: 'Arrivé au centre de distribution',
            location: 'Dubaï',
          },
          trackingId.includes('DEL')
            ? {
                date: '13/02/2024 16:45',
                status: 'Livré au destinataire',
                location: 'Dubaï',
              }
            : {
                date: '13/02/2024 08:00',
                status: 'En cours de livraison',
                location: 'Dubaï',
              },
        ],
      };

      setTrackingResult(mockTrackingData);
    }, 1200);
  };

  const handleSimulateShipment = (e) => {
    e.preventDefault();

    if (
      !simulationForm.length ||
      !simulationForm.width ||
      !simulationForm.height ||
      !simulationForm.weight ||
      !simulationForm.originCountry ||
      !simulationForm.destinationCountry
    ) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      const length = parseFloat(simulationForm.length);
      const width = parseFloat(simulationForm.width);
      const height = parseFloat(simulationForm.height);
      const weight = parseFloat(simulationForm.weight);

      const volume = length * width * height;
      const packageType = packageTypes.find(
        (p) => p.value === simulationForm.packageType
      );
      let baseCost = packageType.baseCost;

      let volumeCost = volume > 5000 ? (volume - 5000) * 0.002 : 0;
      let weightCost = weight > 5 ? (weight - 5) * 1.5 : 0;

      const isInternational =
        simulationForm.originCountry !== simulationForm.destinationCountry;
      const internationalMultiplier = isInternational ? 1.8 : 1;

      const totalCost =
        (baseCost + volumeCost + weightCost) * internationalMultiplier;

      let deliveryDays;
      if (simulationForm.packageType === 'express') {
        deliveryDays = isInternational ? '3-5' : '1-2';
      } else if (simulationForm.packageType === 'priority') {
        deliveryDays = isInternational ? '2-3' : '1';
      } else {
        deliveryDays = isInternational ? '7-14' : '3-5';
      }

      setSimulationResult({
        cost: totalCost.toFixed(2),
        deliveryDays,
        trackingId: `SIAB${Math.random()
          .toString(36)
          .substr(2, 9)
          .toUpperCase()}`,
        packageType: simulationForm.packageType,
        dimensions: `${length}x${width}x${height}cm`,
        weight: `${weight}kg`,
        route: `${simulationForm.originCountry} → ${simulationForm.destinationCountry}`,
      });
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSimulationForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForms = () => {
    setTrackingId('');
    setTrackingResult(null);
    setSimulationResult(null);
    setSimulationForm({
      length: '',
      width: '',
      height: '',
      weight: '',
      originCountry: '',
      destinationCountry: '',
      packageType: 'standard',
    });
  };

  const tabVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <section
      id="suivi"
      className="min-h-screen bg-white py-20 border-t border-b border-primary-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4">
            Services d'Expédition
          </h2>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto font-medium">
            Suivez vos colis en temps réel ou simulez les coûts d'expédition
            pour votre prochaine livraison
          </p>
        </motion.div>

        {/* Navigation par Onglets */}
        <div className="flex justify-center mb-12">
          <div className="bg-white border border-primary-200 shadow-md">
            <button
              onClick={() => {
                setActiveTab('suivi');
                resetForms();
              }}
              className={`px-12 py-4 font-semibold text-lg transition-all duration-200 ${
                activeTab === 'suivi'
                  ? 'bg-primary-500 text-white'
                  : 'text-primary-600 hover:text-primary-500 hover:bg-primary-50'
              }`}
            >
              📦 Suivi de Colis
            </button>
            <button
              onClick={() => {
                setActiveTab('simulation');
                resetForms();
              }}
              className={`px-12 py-4 font-semibold text-lg transition-all duration-200 ${
                activeTab === 'simulation'
                  ? 'bg-primary-500 text-white'
                  : 'text-primary-600 hover:text-primary-500 hover:bg-primary-50'
              }`}
            >
              🚀 Simulation d'Expédition
            </button>
          </div>
        </div>

        {/* Contenu des Onglets */}
        <div className="bg-white shadow-xl border border-primary-200">
          <AnimatePresence mode="wait">
            {activeTab === 'suivi' && (
              <motion.div
                key="suivi"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.2 }}
                className="p-8 md:p-12"
              >
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-3xl font-bold text-primary-700 mb-6 text-center">
                    Suivez Votre Colis
                  </h3>

                  <form onSubmit={handleTrackShipment} className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <input
                        type="text"
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        placeholder="Entrez votre numéro de suivi (ex: SIAB123456789)"
                        className="flex-1 px-6 py-4 border-2 border-primary-200 focus:border-primary-500 focus:outline-none transition-all duration-200 text-lg font-medium"
                      />
                      <button
                        type="submit"
                        disabled={isLoading || !trackingId.trim()}
                        className="px-8 py-4 bg-primary-500 text-white font-semibold text-lg hover:bg-primary-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                            Suivi en cours...
                          </div>
                        ) : (
                          'Suivre le Colis'
                        )}
                      </button>
                    </div>
                  </form>

                  {/* Résultats du Suivi */}
                  <AnimatePresence>
                    {trackingResult && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-8 bg-primary-50 p-6 border border-primary-200"
                      >
                        <h4 className="text-xl font-bold text-primary-700 mb-4">
                          Résultats du Suivi
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div>
                            <p className="font-semibold">
                              Statut:{' '}
                              <span className="font-normal">
                                {trackingResult.status
                                  .replace('_', ' ')
                                  .toUpperCase()}
                              </span>
                            </p>
                            <p className="font-semibold">
                              Emplacement actuel:{' '}
                              <span className="font-normal">
                                {trackingResult.currentLocation}
                              </span>
                            </p>
                            <p className="font-semibold">
                              Livraison estimée:{' '}
                              <span className="font-normal">
                                {trackingResult.estimatedDelivery}
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="font-semibold">
                              Origine:{' '}
                              <span className="font-normal">
                                {trackingResult.origin}
                              </span>
                            </p>
                            <p className="font-semibold">
                              Destination:{' '}
                              <span className="font-normal">
                                {trackingResult.destination}
                              </span>
                            </p>
                          </div>
                        </div>

                        {/* Chronologie */}
                        <div>
                          <h5 className="font-bold text-primary-700 mb-4">
                            Chronologie de l'Expédition
                          </h5>
                          <div className="space-y-3">
                            {trackingResult.timeline.map((event, index) => (
                              <div
                                key={index}
                                className="flex items-start space-x-4"
                              >
                                <div className="w-2 h-2 bg-primary-500 mt-2 shrink-0"></div>
                                <div className="flex-1">
                                  <p className="font-semibold">
                                    {event.status}
                                  </p>
                                  <p className="text-sm text-primary-600">
                                    {event.date} • {event.location}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {activeTab === 'simulation' && (
              <motion.div
                key="simulation"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.2 }}
                className="p-8 md:p-12"
              >
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-3xl font-bold text-primary-700 mb-6 text-center">
                    Simuler les Coûts d'Expédition
                  </h3>

                  <form onSubmit={handleSimulateShipment} className="space-y-8">
                    {/* Dimensions du Colis */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-primary-700 font-semibold mb-2">
                          Longueur (cm)
                        </label>
                        <input
                          type="number"
                          name="length"
                          value={simulationForm.length}
                          onChange={handleInputChange}
                          placeholder="ex: 30"
                          className="w-full px-4 py-3 border-2 border-primary-200 focus:border-primary-500 focus:outline-none transition-all duration-200 font-medium"
                          min="1"
                          max="200"
                        />
                      </div>
                      <div>
                        <label className="block text-primary-700 font-semibold mb-2">
                          Largeur (cm)
                        </label>
                        <input
                          type="number"
                          name="width"
                          value={simulationForm.width}
                          onChange={handleInputChange}
                          placeholder="ex: 20"
                          className="w-full px-4 py-3 border-2 border-primary-200 focus:border-primary-500 focus:outline-none transition-all duration-200 font-medium"
                          min="1"
                          max="200"
                        />
                      </div>
                      <div>
                        <label className="block text-primary-700 font-semibold mb-2">
                          Hauteur (cm)
                        </label>
                        <input
                          type="number"
                          name="height"
                          value={simulationForm.height}
                          onChange={handleInputChange}
                          placeholder="ex: 15"
                          className="w-full px-4 py-3 border-2 border-primary-200 focus:border-primary-500 focus:outline-none transition-all duration-200 font-medium"
                          min="1"
                          max="200"
                        />
                      </div>
                    </div>

                    {/* Poids et Type de Colis */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-primary-700 font-semibold mb-2">
                          Poids (kg)
                        </label>
                        <input
                          type="number"
                          name="weight"
                          value={simulationForm.weight}
                          onChange={handleInputChange}
                          placeholder="ex: 2.5"
                          step="0.1"
                          className="w-full px-4 py-3 border-2 border-primary-200 focus:border-primary-500 focus:outline-none transition-all duration-200 font-medium"
                          min="0.1"
                          max="100"
                        />
                      </div>
                      <div>
                        <label className="block text-primary-700 font-semibold mb-2">
                          Type de Colis
                        </label>
                        <select
                          name="packageType"
                          value={simulationForm.packageType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-primary-200 focus:border-primary-500 focus:outline-none transition-all duration-200 font-medium"
                        >
                          {packageTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Pays */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-primary-700 font-semibold mb-2">
                          Pays d'Origine
                        </label>
                        <select
                          name="originCountry"
                          value={simulationForm.originCountry}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-primary-200 focus:border-primary-500 focus:outline-none transition-all duration-200 font-medium"
                        >
                          <option value="">
                            Sélectionnez le pays d'origine
                          </option>
                          {countries.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-primary-700 font-semibold mb-2">
                          Pays de Destination
                        </label>
                        <select
                          name="destinationCountry"
                          value={simulationForm.destinationCountry}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-2 border-primary-200 focus:border-primary-500 focus:outline-none transition-all duration-200 font-medium"
                        >
                          <option value="">
                            Sélectionnez le pays de destination
                          </option>
                          {countries.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Bouton de Soumission */}
                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="px-12 py-4 bg-primary-500 text-white font-semibold text-lg hover:bg-primary-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                            Calcul en cours...
                          </div>
                        ) : (
                          "Calculer le Coût d'Expédition"
                        )}
                      </button>
                    </div>
                  </form>

                  {/* Résultats de Simulation */}
                  <AnimatePresence>
                    {simulationResult && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-8 bg-primary-500 p-8 text-white shadow-lg"
                      >
                        <h4 className="text-2xl font-bold mb-6 text-center">
                          Devis d'Expédition
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center mb-6">
                          <div>
                            <p className="text-primary-200 text-sm font-semibold">
                              Coût Estimé
                            </p>
                            <p className="text-3xl font-bold">
                              {simulationResult.cost}€
                            </p>
                          </div>
                          <div>
                            <p className="text-primary-200 text-sm font-semibold">
                              Délai de Livraison
                            </p>
                            <p className="text-2xl font-bold">
                              {simulationResult.deliveryDays} jours
                            </p>
                          </div>
                          <div>
                            <p className="text-primary-200 text-sm font-semibold">
                              Numéro de Suivi
                            </p>
                            <p className="text-xl font-bold font-mono">
                              {simulationResult.trackingId}
                            </p>
                          </div>
                        </div>
                        <div className="pt-6 border-t border-primary-400">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <p>
                              <strong>Type de Colis:</strong>{' '}
                              {
                                packageTypes.find(
                                  (p) =>
                                    p.value === simulationResult.packageType
                                )?.label
                              }
                            </p>
                            <p>
                              <strong>Dimensions:</strong>{' '}
                              {simulationResult.dimensions}
                            </p>
                            <p>
                              <strong>Poids:</strong> {simulationResult.weight}
                            </p>
                            <p>
                              <strong>Itinéraire:</strong>{' '}
                              {simulationResult.route}
                            </p>
                          </div>
                        </div>
                        <div className="text-center mt-6">
                          <button className="px-8 py-3 bg-white text-primary-500 font-semibold hover:bg-primary-50 transition-all duration-200 shadow-md">
                            Réserver Cet Envoi
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ShipmentTrackerSimulator;

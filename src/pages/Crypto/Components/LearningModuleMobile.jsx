import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const LearningModuleMobile = () => {
  const [expandedMobileModule, setExpandedMobileModule] = useState({ basic: null, pro: null });

  const modules = [
    { 
      name: 'Module 01 - Intro', 
      basic: true, 
      pro: true,
      keyPoints: [
        'Basics of Technical vs. Fundamental Analysis',
        'Market cycles and psychology',
        'Role of smart money vs. retail traders',
        'Support & Resistance basics',
        'Chart patterns: reversal & continuation',
        'Identifying strong zones and avoiding false signals'
      ]
    },
    { 
      name: 'Module 02 - Forex Trading', 
      basic: true, 
      pro: true,
      keyPoints: [
        'Introduction to Forex & history',
        'Market participants: banks, institutions, retailers',
        'Currency pairs: majors, minors & exotics',
        'Forex orders, quotes, spreads & sessions',
        'Risk management & trading psychology',
        'Core trade setups: OG, Reversal, Engulfing'
      ]
    },
    { 
      name: 'Module 03 - Crypto trading', 
      basic: true, 
      pro: true,
      keyPoints: [
        'What is cryptocurrency & blockchain basics',
        'Bitcoin, altcoins & how crypto differs from traditional finance',
        'Exchanges, wallets & security essentials',
        'Long-term vs. short-term crypto strategies',
        'DeFi, NFTs & future of Web3',
        'Risks, scams & regulations in the crypto space'
      ]
    },
    { 
      name: 'Module 04 - Options Trading', 
      basic: false, 
      pro: true,
      keyPoints: [
        'Understanding derivatives: options & futures',
        'Calls, puts & option pricing basics',
        'Trading strategies for bullish & bearish markets',
        'Hedging with options',
        'Trading psychology & risk management',
        'Developing a disciplined trading mindset'
      ]
    },
    { 
      name: 'Module 05 - OG setup', 
      basic: false, 
      pro: true,
      keyPoints: [
        'Structure of the OG setup',
        'Market conditions where it works best',
        'Step-by-step rules for entry & exit',
        'Risk-to-reward guidelines',
        'Live examples of OG in action'
      ]
    },
    { 
      name: 'Module 06 - Reversal Setup', 
      basic: false, 
      pro: true,
      keyPoints: [
        'Identifying exhaustion & reversal zones',
        'Key candlestick signals',
        'Confirmation tools for reversals',
        'Timing entries for maximum gains',
        'Managing trades during trend shifts'
      ]
    },
    { 
      name: 'Module 07 - Funded Account Strategies', 
      basic: false, 
      pro: true,
      keyPoints: [
        'Clearing funding challenges step by step',
        'Risk management under strict rules',
        'Handling drawdowns effectively',
        'Scaling strategies for funded accounts',
        'Maintaining consistency & discipline'
      ]
    },
    { 
      name: 'Module 08 - Live trading', 
      basic: false, 
      pro: true,
      keyPoints: [
        'Applying setups in real market conditions',
        'Step-by-step trade execution',
        'Handling emotions during live trades',
        'Trade reviews & performance tracking',
        'Building confidence through practical experience'
      ]
    },
    { 
      name: 'QnA Session', 
      basic: true, 
      pro: true,
      keyPoints: []
    },
    { 
      name: 'Telegram Club access', 
      basic: 'Yes, One month', 
      pro: 'Yes, 3 Months',
      keyPoints: []
    }
  ];

  const toggleMobileModule = (plan, index) => {
    setExpandedMobileModule(prev => ({
      ...prev,
      [plan]: prev[plan] === index ? null : index
    }));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 py-12">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-normal text-gray-300 mb-2">
            Learning Modules
          </h2>
         
        </motion.div>

        <div className="space-y-6">
          {/* Basic Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border border-white shadow-md shadow-[#ff6a0087] rounded-xl overflow-hidden backdrop-blur-sm bg-[#593A0233]"
          >
            <div className="border-b border-white px-4 py-4 bg-black">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-400 text-center">
                CryptoFx Basic Price : 4,999
              </h3>
            </div>

            <div className="bg-black">
              {modules.map((module, index) => (
                <div key={index}>
                  <button
                    onClick={() => module.keyPoints.length > 0 && toggleMobileModule('basic', index)}
                    className="w-full p-4 flex items-center justify-between gap-2 hover:bg-amber-900/10 transition-colors"
                  >
                    <span className="text-sm font-medium text-left text-white">
                      {module.name}
                    </span>
                    <div className="flex items-center gap-3">
                      {typeof module.basic === 'boolean' ? (
                        <span className="text-white text-sm font-medium">
                          {module.basic ? 'Yes' : 'No'}
                        </span>
                      ) : (
                        <span className="text-white text-xs">{module.basic}</span>
                      )}
                      {module.keyPoints.length > 0 && (
                        <motion.div
                          animate={{ rotate: expandedMobileModule.basic === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        </motion.div>
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedMobileModule.basic === index && module.keyPoints.length > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-gray-900/50"
                      >
                        <div className="p-4 border-t border-gray-700/30">
                          <h4 className="text-amber-400 font-semibold mb-3 text-sm">
                            Key Learning Points:
                          </h4>
                          <ul className="space-y-2">
                            {module.keyPoints.map((point, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.03 }}
                                className="flex items-start gap-2 text-gray-300 text-xs"
                              >
                                <span className="text-amber-500 mt-0.5">•</span>
                                <span>{point}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pro Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="border border-amber-600 rounded-xl overflow-hidden backdrop-blur-sm bg-black/40 shadow-xl shadow-amber-600/20"
          >
            <div className="border-b-2 border-amber-600 px-4 py-4 bg-black">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-500 text-center">
                CryptoFx Pro : 9,999
              </h3>
            </div>

            <div className="divide-y divide-gray-700/50">
              {modules.map((module, index) => (
                <div key={index}>
                  <button
                    onClick={() => module.keyPoints.length > 0 && toggleMobileModule('pro', index)}
                    className="w-full p-4 flex items-center justify-between gap-2 hover:bg-amber-900/10 transition-colors"
                  >
                    <span className="text-sm font-medium text-left text-white">
                      {module.name}
                    </span>
                    <div className="flex items-center gap-3">
                      {typeof module.pro === 'boolean' ? (
                        <span className="text-white text-sm font-medium">
                          {module.pro ? 'Yes' : 'No'}
                        </span>
                      ) : (
                        <span className="text-white text-xs">{module.pro}</span>
                      )}
                      {module.keyPoints.length > 0 && (
                        <motion.div
                          animate={{ rotate: expandedMobileModule.pro === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        </motion.div>
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedMobileModule.pro === index && module.keyPoints.length > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden bg-gray-900/50"
                      >
                        <div className="p-4 border-t border-gray-700/30">
                          <h4 className="text-amber-400 font-semibold mb-3 text-sm">
                            Key Learning Points:
                          </h4>
                          <ul className="space-y-2">
                            {module.keyPoints.map((point, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.03 }}
                                className="flex items-start gap-2 text-gray-300 text-xs"
                              >
                                <span className="text-amber-500 mt-0.5">•</span>
                                <span>{point}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LearningModuleMobile;
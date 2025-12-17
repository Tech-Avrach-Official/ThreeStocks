import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const LearningModule = () => {
  const [expandedModule, setExpandedModule] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);

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
      highlight: true,
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

  const toggleModule = (index) => {
    setExpandedModule(prev => prev === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8 py-20">
      <div className="max-w-7xl w-full">
        <h2 className="text-5xl font-normal text-gray-300 text-center mb-16">
          Learning Modules
        </h2>

        <div className="border border-white shadow-md shadow-[#ff6a0087] rounded-3xl p-8 backdrop-blur-sm bg-black/40">
          <div className="grid grid-cols-3 gap-6">
            {/* Module Column */}
            <div className="space-y-4 border border-[#C7AFAF33] p-5 rounded-2xl">
              <div className="rounded-2xl border-2 border-amber-600 px-6 py-3 text-center">
                <span className="text-white text-xl font-semibold">Module</span>
              </div>
              
              <div className="space-y-3 pt-6">
                {modules.map((module, index) => (
                  <div key={index} className="space-y-2">
                    <div 
                      onClick={() => module.keyPoints.length > 0 && toggleModule(index)}
                      onMouseEnter={() => setHoveredRow(index)}
                      onMouseLeave={() => setHoveredRow(null)}
                      className={`p-4 rounded-lg transition-all duration-300 ${
                        module.keyPoints.length > 0 ? 'cursor-pointer' : ''
                      } ${
                        expandedModule === index || hoveredRow === index 
                          ? 'text-amber-400 bg-gray-900/50' 
                          : 'text-white'
                      } flex items-center justify-between`}
                    >
                      <span>{module.name}</span>
                      {module.keyPoints.length > 0 && (
                        <motion.div
                          animate={{ rotate: expandedModule === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      )}
                    </div>

                    <AnimatePresence>
                      {expandedModule === index && module.keyPoints.length > 0 && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-4 p-3 bg-gray-900/30 rounded-lg border-l-2 border-amber-400">
                            <ul className="space-y-2 text-sm text-gray-400">
                              {module.keyPoints.map((point, i) => (
                                <motion.li 
                                  key={i}
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="flex items-start"
                                >
                                  <span className="text-amber-500 mr-2">•</span>
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
            </div>

            {/* Basic Price Column */}
            <div className="space-y-4 group bg-[#593A0233] border border-white p-5 rounded-2xl">
              <div className="rounded-2xl border-2 border-[#ffdd00] px-6 py-3 text-center bg-gradient-to-r from-amber-900/20 to-orange-900/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-600/20 group-hover:scale-105">
                <span className="text-white text-xl font-semibold">CryptoFx Basic Price : 4,999</span>
              </div>
              
              <div className="space-y-3 pt-6">
                {modules.map((module, index) => (
                  <div 
                    key={index}
                    onMouseEnter={() => setHoveredRow(index)}
                    onMouseLeave={() => setHoveredRow(null)}
                    className={`p-4 rounded-lg text-center transition-all duration-300 ${
                      expandedModule === index || hoveredRow === index
                        ? 'bg-amber-900/20 text-amber-400'
                        : 'text-white'
                    }`}
                  >
                    {typeof module.basic === 'boolean' ? (
                      <span>
                        {module.basic ? 'Yes' : 'No'}
                      </span>
                    ) : (
                      <span>{module.basic}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Price Column */}
            <div className="space-y-4 group border border-[#C7AFAF33] p-5 rounded-2xl">
              <div className="rounded-2xl border-2 border-amber-600 px-6 py-3 text-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-amber-600/20 group-hover:scale-105">
                <span className="text-amber-500 text-xl font-semibold">CryptoFx Pro : 9,999</span>
              </div>
              
              <div className="space-y-3 pt-6">
                {modules.map((module, index) => (
                  <div 
                    key={index}
                    onMouseEnter={() => setHoveredRow(index)}
                    onMouseLeave={() => setHoveredRow(null)}
                    className={`p-4 rounded-lg text-center transition-all duration-300 ${
                      expandedModule === index || hoveredRow === index
                        ? 'bg-amber-900/20 text-amber-400'
                        : 'text-white'
                    }`}
                  >
                    {typeof module.pro === 'boolean' ? (
                      <span>
                        {module.pro ? 'Yes' : 'No'}
                      </span>
                    ) : (
                      <span>{module.pro}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningModule;
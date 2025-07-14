'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { PrivacyPolicyModal } from './PrivacyPolicyModal'
import { AboutModal } from './AboutModal'
import { TermsModal } from './TermsModal'

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)
  const assetPrefix =  process.env.ASSET_PREFIX || '';
  return (
    <>
      <footer ref={ref} className="bg-gray-200 text-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            {/* GLC Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center"
            >
              <Image
                src={`${assetPrefix}glc.png`}
                alt="GLC Logo"
                width={120}
                height={40}
                className="h-12 w-auto object-contain"
              />
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-8"
            >
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="text-gray-600 hover:text-cyan-600 transition-colors font-medium"
              >
                Privacy
              </button>
              <button
                onClick={() => setIsTermsModalOpen(true)}
                className="text-gray-600 hover:text-cyan-600 transition-colors font-medium"
              >
                Terms
              </button>
              <button
                onClick={() => setIsAboutModalOpen(true)}
                className="text-gray-600 hover:text-cyan-600 transition-colors font-medium"
              >
                About
              </button>
            </motion.div>

            {/* Contact Us Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a 
                href="mailto:info@glc.healthcare"
                className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg inline-block"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 pt-8 border-t border-gray-400 text-center"
          >
            <p className="text-gray-700 text-sm mb-2">
              This curriculum is provided by Global Learning Collaborative.
            </p>
            <p className="text-gray-600 text-sm">
              © 2025 ReachMD. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
      
      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      
      {/* Terms Modal */}
      <TermsModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)} 
      />
      
      {/* About Modal */}
      <AboutModal 
        isOpen={isAboutModalOpen} 
        onClose={() => setIsAboutModalOpen(false)} 
      />
    </>
  )
} 
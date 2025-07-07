'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-xl border-b border-white/30 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* ReachMD Logo - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center"
          >
            <Image
              src="/reach.png"
              alt="ReachMD Logo"
              width={320}
              height={100}
              className="h-28 w-auto object-cover object-center"
              style={{ 
                clipPath: 'inset(30% 0 30% 0)',
                transform: 'scale(1.8)',
                marginTop: '-16px',
                marginBottom: '-16px'
              }}
              priority
            />
          </motion.div>

          {/* GLC Logo - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center"
          >
            <Image
              src="/glc.png"
              alt="GLC Logo"
              width={120}
              height={40}
              className="h-12 w-auto object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
} 
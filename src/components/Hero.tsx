'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative h-[45vh] overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0">
        <Image
          src="/masldnew.jpg"
          alt="Background"
          fill
          className="object-cover filter blur-sm scale-100"
          priority
        />
      </div>
      
      {/* Purple Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/75 to-indigo-900/80"></div>
      
      {/* Additional Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(120,119,198,0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(120,119,198,0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 70%, rgba(120,119,198,0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(120,119,198,0.3) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 70% 80%, rgba(99,102,241,0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 30% 60%, rgba(99,102,241,0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 60% 20%, rgba(99,102,241,0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 70% 80%, rgba(99,102,241,0.2) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute inset-0"
        />
        <motion.div
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59,130,246,0.1) 0%, transparent 70%)",
              "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, transparent 70%)",
              "linear-gradient(225deg, rgba(59,130,246,0.1) 0%, transparent 70%)",
              "linear-gradient(315deg, rgba(59,130,246,0.1) 0%, transparent 70%)",
              "linear-gradient(45deg, rgba(59,130,246,0.1) 0%, transparent 70%)"
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute inset-0"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-start min-h-full px-6 lg:px-12">
        <div className="text-left space-y-6 max-w-5xl">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              MASLD/MASH Learning Center
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light text-cyan-300">
              Advancing Care in Metabolic-Associated Steatohepatitis
            </h2>
          </motion.div>

          {/* CTA Button - Only Explore Activities, made smaller */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-start pt-4"
          >
            <button 
              onClick={() => document.getElementById('educational-activities')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/30 hover:border-white/50 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:bg-white/10 text-base"
            >
              Explore Activities
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 
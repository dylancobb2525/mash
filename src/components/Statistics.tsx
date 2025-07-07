'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TrendingUp, Users, Globe, Heart } from 'lucide-react'

interface StatCardProps {
  icon: React.ReactNode
  statValue: string
  animatedNumber: number
  suffix: string
  description: string
  delay: number
}

function StatCard({ icon, statValue, animatedNumber, suffix, description, delay }: StatCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView && animatedNumber > 0) {
      const timer = setTimeout(() => {
        const duration = 2000
        const steps = 60
        const increment = animatedNumber / steps
        let current = 0
        
        const counter = setInterval(() => {
          current += increment
          if (current >= animatedNumber) {
            setCount(animatedNumber)
            clearInterval(counter)
          } else {
            setCount(current)
          }
        }, duration / steps)
        
        return () => clearInterval(counter)
      }, delay)
      
      return () => clearTimeout(timer)
    }
  }, [isInView, animatedNumber, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="group h-full"
    >
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group-hover:scale-105 h-full flex flex-col min-h-[320px]">
        <div className="flex flex-col items-center text-center space-y-4 flex-1">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: (delay + 200) / 1000 }}
            className="p-4 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300"
          >
            {icon}
          </motion.div>
          
          <div className="space-y-3 flex-1 flex flex-col justify-center">
            <motion.div
              className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent h-[3rem] flex items-center justify-center"
            >
              {statValue.includes('M') && animatedNumber > 0 ? (
                <>{count.toFixed(1)}M</>
              ) : statValue.includes('Most common') ? (
                <>Most common</>
              ) : statValue.includes('Leading') ? (
                <>Leading cause</>
              ) : (
                <>{count}{suffix}</>
              )}
            </motion.div>
            
            <p className="text-gray-600 leading-relaxed text-xs lg:text-sm h-[6rem] flex items-center justify-center text-center px-3">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Statistics() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-500" />,
      statValue: "101.2M",
      animatedNumber: 101.2,
      suffix: "",
      description: "It is estimated that by 2030 and 2050, 101.2 million and 121.9 million adults in the US will have MASLD.1",
      delay: 200
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      statValue: "23.2M",
      animatedNumber: 23.2,
      suffix: "",
      description: "It is estimated that in 2020 14.9 million adults in the US had MASH which is expected to increased to 23.2 million by 2050.1",
      delay: 400
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      statValue: "Most common",
      animatedNumber: 0,
      suffix: "",
      description: "MASLD is the most common cause of chronic liver disease and is projected to become the leading indication for liver transplant in the US",
      delay: 600
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      statValue: "Leading cause",
      animatedNumber: 0,
      suffix: "",
      description: "Cardiovascular disease is the leading cause of morbidity and mortality in patients with MASLD",
      delay: 800
    }
  ]

  return (
    <section ref={ref} className="py-8 lg:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
} 
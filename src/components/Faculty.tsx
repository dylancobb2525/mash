'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { User } from 'lucide-react'
import Image from 'next/image'

interface FacultyCardProps {
  name: string
  image?: string
  index: number
}

function FacultyCard({ name, image, index }: FacultyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="h-full"
    >
      <div className="bg-white border border-gray-200 rounded-xl p-4 transition-all duration-300 text-center h-full flex flex-col justify-between min-h-[160px]">
        {/* Profile Photo */}
        <div className="w-20 h-20 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center transition-colors overflow-hidden flex-shrink-0">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={80}
              height={80}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <User className="w-8 h-8 text-gray-400" />
          )}
        </div>
        
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Name */}
          <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2">
            {name}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

export function Faculty() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const facultyMembers = [
    { name: "Naim Alkhouri, MD, FAASLD, DABOM", image: "/naim.jpg" },
    { name: "Mazen Noureddin, MD, MHSc", image: "/mazen.jpg" },
    { name: "Meena B. Bansal, MD, FAASLD", image: "/meena.jpg" },
    { name: "Fernando Bril, MD", image: "/fern.jpg" },
    { name: "Nicholas Pennings, DO, DABOM, MFOMA, FACOFP, FAAFP", image: "/nic.jpg" },
    { name: "Jennifer R. Berg", image: "/jen.jpg" },
    { name: "Mary E. Rinella, MD, FAASLD", image: "/mary.jpg" },
    { name: "Naga Chalasani, MD, FAASLD", image: "/naga.jpg" }
  ]

  return (
    <section ref={ref} className="py-8 lg:py-12 bg-gradient-to-b from-gray-100 to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Faculty
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our distinguished team of experts dedicated to advancing MASLD/MASH care and education worldwide.
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {facultyMembers.map((faculty, index) => (
            <FacultyCard 
              key={index}
              name={faculty.name}
              image={faculty.image}
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  )
} 
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface ActivityCardProps {
  title: string
  category: string
  credits: string
  image: string
  link: string
  index: number
}

function ActivityCard({ title, category, credits, image, link, index }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer w-full"
    >
      <div 
        onClick={() => window.open(link, '_blank')}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 group-hover:scale-[1.02] h-full flex flex-col"
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-blue-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-white text-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 mx-auto">
                View Activity <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight line-clamp-3">
            {title}
          </h3>

          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-gray-600 mt-auto">
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4" />
              <span>{credits} Credits</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function EducationalPrograms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const activities = [
    {
      title: "Treating MASH With Compensated Cirrhosis: A Serious Unmet Need",
      category: "CME/CE",
      credits: "0.25",
      image: "/newact.png",
      link: "https://reachmd.com/programs/cme/treating-mash-with-compensated-cirrhosis-a-serious-unmet-need/37646/"
    },
    {
      title: "The Changing Paradigm of Treating MASLD/MASH: At the Crossroads of Hepato-Cardiometabolic Care – Chair's Perspective",
      category: "CME/CE",
      credits: "0.25",
      image: "/act1.png",
      link: "https://reachmd.com/programs/cme/the-changing-paradigm-of-treating-masldmash-at-the-crossroads-of-hepato-cardiometabolic-care-chairs-perspective/26372/"
    },
    {
      title: "Stemming the Tide on MASLD/MASH: It Starts on the Frontlines in Endocrinology and Primary Care Clinics",
      category: "CME/CE",
      credits: "1.00",
      image: "/act2.png",
      link: "https://reachmd.com/live-events/stemming-the-tide-on-masldmash-it-starts-on-the-frontlines-in-endocrinology-and-primary-care-clinics/35723/"
    },
    {
      title: "Chairperson's Perspective: Treating At-Risk MASH: What Are You Waiting For?",
      category: "CME/CE",
      credits: "0.25",
      image: "/act3.png",
      link: "https://reachmd.com/programs/cme/chairpersons-perspective-treating-at-risk-mash-what-are-you-waiting-for/28862/"
    },
    {
      title: "Advances in the Treatment and Management of MASH: More Options, More Decisions",
      category: "CME/CE",
      credits: "1.50",
      image: "/act4.png",
      link: "https://reachmd.com/live-events/advances-in-the-treatment-and-management-of-mash-more-options-more-decisions/26621/"
    },
    {
      title: "Advances in MASLD/MASH: Treating the Liver, the Disease, and the Patient – Chair's Perspective",
      category: "CME/CE",
      credits: "0.25",
      image: "/act5.png",
      link: "https://reachmd.com/programs/cme/advances-in-masldmash-treating-the-liver-the-disease-and-the-patient-chairs-perspective/24278/"
    }
  ]

  return (
    <section ref={ref} id="educational-activities" className="py-8 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Educational Activities
          </h2>
        </motion.div>

        {/* Activities Grid - 2x3 layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
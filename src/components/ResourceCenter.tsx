'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FileText, ExternalLink, Calendar, Users, ChevronDown, ChevronUp } from 'lucide-react'

interface ResourceCardProps {
  title: string
  authors: string
  publication: string
  date: string
  link: string
  index: number
}

function ResourceCard({ title, authors, publication, date, link, index }: ResourceCardProps) {
  const handleClick = () => {
    if (link && link !== '#') {
      window.open(link, '_blank')
    }
  }

  return (
    <div
      className={`group ${link && link !== '#' ? 'cursor-pointer' : 'cursor-default'}`}
      onClick={handleClick}
    >
      <div className={`bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 h-full flex flex-col ${
        link && link !== '#' 
          ? 'hover:shadow-lg hover:border-blue-200 group-hover:scale-[1.01]' 
          : ''
      }`}>
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className={`p-2 bg-blue-50 rounded-lg transition-colors ${
            link && link !== '#' ? 'group-hover:bg-blue-100' : ''
          }`}>
            <FileText className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className={`font-semibold text-gray-900 leading-tight transition-colors ${
              link && link !== '#' ? 'group-hover:text-blue-600' : ''
            }`}>
              {title}
            </h3>
          </div>
          {link && link !== '#' && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
              <ExternalLink className="w-4 h-4 text-gray-500" />
            </div>
          )}
        </div>

        {/* Authors */}
        <p className="text-sm text-gray-600 mb-3 overflow-hidden">
          {authors}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{publication}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-4 border-t border-gray-100 mt-auto">
          <button 
            className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-1 ${
              link && link !== '#' 
                ? 'bg-blue-50 hover:bg-blue-100 text-blue-600' 
                : 'bg-gray-50 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ExternalLink className="w-4 h-4" />
            {link && link !== '#' ? 'Read More' : 'Coming Soon'}
          </button>
        </div>
      </div>
    </div>
  )
}

export function ResourceCenter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isExpanded, setIsExpanded] = useState(false)

  const resources = [
    {
      title: "Estimated Burden of Metabolic Dysfunction-Associated Steatotic Liver Disease in US Adults, 2020 to 2050",
      authors: "Le P, Tatar M, Dasarathy S, Alkhouri N, Herman WH, Taksler GB, Deshpande A, Ye W, Adekunle OA, McCullough A, Rothberg MB.",
      publication: "JAMA Netw Open",
      date: "2025 Jan 2",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11742522/",
      index: 0
    },
    {
      title: "AASLD Practice Statement on the evaluation and management of metabolic dysfunction-associated steatotic liver disease in children",
      authors: "Xanthakos SA, Ibrahim SH, Adams K, Kohli R, Sathya P, Sundaram S, Vos MB, Dhawan A, Caprio S, Behling CA, Schwimmer JB.",
      publication: "Hepatology",
      date: "2025 Apr 29",
      link: "https://journals.lww.com/hep/citation/9900/aasld_practice_statement_on_the_evaluation_and.1258.aspx",
      index: 1
    },
    {
      title: "Resmetirom therapy for metabolic dysfunction-associated steatotic liver disease: October 2024 updates to AASLD Practice Guidance",
      authors: "Chen VL, Morgan TR, Rotman Y, Patton HM, Cusi K, Kanwal F, Kim WR.",
      publication: "Hepatology",
      date: "2025 Jan 1",
      link: "https://journals.lww.com/hep/fulltext/2025/01000/resmetirom_therapy_for_metabolic.28.aspx",
      index: 2
    },
    {
      title: "AASLD Practice Guideline on blood-based noninvasive liver disease assessment of hepatic fibrosis and steatosis",
      authors: "Sterling RK, Patel K, Duarte-Rojo A, Asrani SK, Alsawas M, Dranoff JA, Fiel MI, Murad MH, Leung DH, Levine D, Taddei TH, Taouli B, Rockey DC.",
      publication: "Hepatology",
      date: "2025 Jan 1",
      link: "https://journals.lww.com/hep/fulltext/2025/01000/aasld_practice_guideline_on_blood_based.29.aspx",
      index: 3
    },
    {
      title: "AASLD Practice Guideline on imaging-based noninvasive liver disease assessment of hepatic fibrosis and steatosis",
      authors: "Sterling RK, Duarte-Rojo A, Patel K, Asrani SK, Alsawas M, Dranoff JA, Fiel MI, Murad MH, Leung DH, Levine D, Taddei TH, Taouli B, Rockey DC.",
      publication: "Hepatology",
      date: "2025 Feb 1",
      link: "https://journals.lww.com/hep/fulltext/2025/02000/aasld_practice_guideline_on_imaging_based.30.aspx",
      index: 4
    },
    {
      title: "EASL-EASD-EASO Clinical Practice Guidelines on the management of metabolic dysfunction-associated steatotic liver disease (MASLD)",
      authors: "European Association for the Study of the Liver (EASL); European Association for the Study of Diabetes (EASD); European Association for the Study of Obesity (EASO).",
      publication: "J Hepatol",
      date: "2024 Sep",
      link: "https://www.journal-of-hepatology.eu/article/S0168-8278(24)00329-5/fulltext",
      index: 5
    },
    {
      title: "Global Consensus Recommendations for Metabolic Dysfunction-Associated Steatotic Liver Disease and Steatohepatitis",
      authors: "Younossi ZM, Zelber-Sagi S, Lazarus JV, Wong VW, Yilmaz Y, Duseja A, Eguchi Y, Castera L, Pessoa MG, Oliveira CP, et al.",
      publication: "Gastroenterology",
      date: "2025 Apr 11",
      link: "https://www.gastrojournal.org/article/S0016-5085(25)00632-8/fulltext?referrer=https%3A%2F%2Fpubmed.ncbi.nlm.nih.gov%2F",
      index: 6
    },
    {
      title: "Guideline for the Prevention and Treatment of Metabolic Dysfunction-associated Fatty Liver Disease (Version 2024)",
      authors: "Fan JG, Xu XY, Yang RX, Nan YM, Wei L, Jia JD, Zhuang H, Shi JP, Li XY, Sun C, Li J, Wong VW, Duan ZP; Chinese Society of Hepatology, Chinese Medical Association.",
      publication: "J Clin Transl Hepatol",
      date: "2024 Nov 28",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11557364/",
      index: 7
    },
    {
      title: "Fat, fibrosis, and the future: navigating the maze of MASLD/MASH",
      authors: "Friedman SL.",
      publication: "J Clin Invest",
      date: "2025 Apr 1",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11957683/",
      index: 8
    },
    {
      title: "Metabolically Healthy Obesity and Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD): Navigating the Controversies in Disease Development and Progression",
      authors: "Koliaki C, Dalamaga M, Kakounis K, Liatis S.",
      publication: "Curr Obes Rep",
      date: "2025 May 19",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11957683/",
      index: 9
    },
    {
      title: "MASLD/MASH in Spain. A liver health policy brief",
      authors: "This country profile offers an overview of the current policy landscape of metabolic dysfunction-associated steatotic liver disease (MASLD) and metabolic dysfunction-associated steatohepatitis (MASH) in Spain.",
      publication: "Policy Brief",
      date: "2024",
      link: "https://sldthinktank.com/policy_and_insights/masld-mash-in-spain-a-liver-health-policy-brief/",
      index: 10
    },
    {
      title: "Awareness of metabolic dysfunction-associated steatotic liver disease (MASLD) in 4 major cities in the United States",
      authors: "Lazarus JV, White TM, Allen AM, Pannain S, Alkhouri N, Bansal MB, Charlton M, Fortune BE, Handelsman Y, Isaacs S, et al.",
      publication: "Hepatol Commun",
      date: "2025 May 6",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12055070/",
      index: 11
    },
    {
      title: "Phase 3 Trial of Semaglutide in Metabolic Dysfunction-Associated Steatohepatitis",
      authors: "Sanyal AJ, Newsome PN, Kliers I, Østergaard LH, Long MT, Kjær MS, Cali AMG, Bugianesi E, Rinella ME, Roden M, Ratziu V; ESSENCE Study Group.",
      publication: "N Engl J Med",
      date: "2025 Jun 5",
      link: "https://www.nejm.org/doi/10.1056/NEJMoa2413258?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed",
      index: 12
    },
    {
      title: "The pleiotropic effects of glucagon-like peptide-1 receptor agonists in patients with metabolic dysfunction-associated steatohepatitis: a review for gastroenterologists",
      authors: "Alkhouri N, Charlton M, Gray M, Noureddin M.",
      publication: "Expert Opin Investig Drugs",
      date: "2025 Mar",
      link: "https://www.tandfonline.com/doi/full/10.1080/13543784.2025.2473062?rfr_dat=cr_pub++0pubmed&url_ver=Z39.88-2003&rfr_id=ori%3Arid%3Acrossref.org",
      index: 13
    },
    {
      title: "Efruxifermin in Compensated Liver Cirrhosis Caused by MASH",
      authors: "Noureddin M, Rinella ME, Chalasani NP, Neff GW, Lucas KJ, Rodriguez ME, Rudraraju M, Patil R, Behling C, Burch M, et al.",
      publication: "N Engl J Med",
      date: "2025 May 9",
      link: "https://www.nejm.org/doi/10.1056/NEJMoa2502242?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed",
      index: 14
    },
    {
      title: "Gaps in MASLD/MASH Education: A Quantitative and Qualitative Survey with Leaders of US Graduate Medical Education Programs",
      authors: "Allen AM, Hoovler AR, Articolo A, Fisher T, Noureddin M, Dieterich D.",
      publication: "Adv Med Educ Pract",
      date: "2025 May 5",
      link: "#",
      index: 15
    },
    {
      title: "Emerging Therapies and Real-World Application of Metabolic Dysfunction-Associated Steatotic Liver Disease Treatment",
      authors: "Kim HY, Rinella ME.",
      publication: "Clin Mol Hepatol",
      date: "2025 Apr 2",
      link: "https://e-cmh.org/journal/view.php?doi=10.3350/cmh.2025.0083",
      index: 16
    },
    {
      title: "The impact of stigma on quality of life and liver disease burden among patients with nonalcoholic fatty liver disease",
      authors: "Younossi ZM, AlQahtani SA, Funuyet-Salas J, Romero-Gómez M, Yilmaz Y, Keklikkiran C, Alswat K, Yu ML, Liu CJ, Fan JG, et al.",
      publication: "JHEP Rep",
      date: "2024 Mar 12",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11252535/",
      index: 17
    },
    {
      title: "Cardiovascular disease in patients with metabolic dysfunction-associated steatohepatitis compared with metabolic dysfunction-associated steatotic liver disease and other liver diseases: A systematic review",
      authors: "Sanyal AJ, Husain M, Diab C, Mangla KK, Shoeb A, Lingvay I, Tapper EB.",
      publication: "Am Heart J Plus",
      date: "2024 Mar 24",
      link: "https://www.sciencedirect.com/science/article/pii/S2666602224000296?via%3Dihub",
      index: 18
    }
  ]

  return (
    <section ref={ref} className="py-8 lg:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Resource Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Discover a curated collection of foundational, practical, cutting-edge and real-world educational resources at your fingertips. Click on a link to get started.
          </p>

          {/* Toggle Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 mx-auto"
          >
            {isExpanded ? 'Hide Resources' : 'Click to View Resources'}
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </motion.button>
        </motion.div>

        {/* Resources Grid - Collapsible */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            {/* Main 3x6 Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {resources.slice(0, 18).map((resource, index) => (
                <ResourceCard key={index} {...resource} />
              ))}
            </div>
            
            {/* Centered 19th resource */}
            <div className="flex justify-center mb-8">
              <div className="w-full md:w-1/3">
                <ResourceCard {...resources[18]} />
              </div>
            </div>
            
            {/* Collapse Button */}
            <div className="flex justify-center">
              <motion.button
                onClick={() => setIsExpanded(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Hide Resources
                <ChevronUp className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
} 
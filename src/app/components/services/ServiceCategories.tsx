import React from 'react'
import { motion } from 'framer-motion'

export type Category = {
  id: string | number
  name: string
  icon?: React.ReactNode
}

export interface ServiceCategoriesProps {
  categories: Category[]
  activeCategory: string | number
  setActiveCategory: React.Dispatch<React.SetStateAction<string | number>>
}

const ServiceCategories: React.FC<ServiceCategoriesProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="overflow-x-auto pb-4 mb-10 hide-scrollbar">
      <div className="flex space-x-2 min-w-max">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`relative px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
              activeCategory === category.id
                ? 'text-white'
                : 'text-gray-700 bg-white border border-gray-200 hover:bg-gray-50'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeCategory === category.id && (
              <motion.div
                className="absolute inset-0 bg-[#d4111e]  rounded-full z-0"
                layoutId="activeCategory"
                initial={false}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center">
              {category.icon && <span className="mr-2">{category.icon}</span>}
              {category.name}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}

export default ServiceCategories

'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-20 pb-40 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-8">
            Hello, I am <span className="font-normal">Dorothea Avellana</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-600 mb-12">
            I create beautiful, minimal web experiences
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gray-900 text-white font-light py-3 px-8 rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Get in touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}


'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full z-10 bg-white bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-light text-gray-800">
            Dorothea AVE.
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-sm font-light text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="#projects" className="text-sm font-light text-gray-600 hover:text-gray-900">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-light text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <button
            type="button"
            className="md:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open menu</span>
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#about" className="block px-3 py-2 text-base font-light text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="#projects" className="block px-3 py-2 text-base font-light text-gray-600 hover:text-gray-900">
            Projects
          </Link>
          <Link href="#contact" className="block px-3 py-2 text-base font-light text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </div>
      </motion.nav>
    </header>
  )
}


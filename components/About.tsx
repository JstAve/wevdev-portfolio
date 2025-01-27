'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code, Figma, Globe, Layout,  Zap } from 'lucide-react'
import { DiMysql } from 'react-icons/di'

export default function About() {
  const skills = [
    { name: "HTML & CSS", icon: Code },
    { name: "JavaScript", icon: Zap },
    { name: "React", icon: Globe },
    { name: "mySQL", icon: DiMysql},
    { name: "UI/UX Design", icon: Figma },
    { name: "Responsive Design", icon: Layout }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-4">About Me</h2>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <Image
              src="/profile.jpg?height=400&width=300"
              alt="Jane Doe"
              width={300}
              height={400}
              className="rounded-lg shadow-md"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <p className="text-xl font-light text-gray-600 mb-6">
            I am a passionate Information Technology student with a strong interest in developing innovative digital solutions. Currently, I’m in my final year of college, focusing on data analysis, web development, and UI/UX design. This portfolio showcases my skills and projects, from my academic journey to personal and collaborative endeavors.
            </p>
            <p className="text-xl font-light text-gray-600">
            Explore my work, and get a glimpse of the dedication and creativity I bring to every project. Whether it is building intuitive user interfaces, designing robust tracking systems. I’m excited to share my journey and future aspirations with you.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center">
              <skill.icon className="w-8 h-8 text-gray-700 mb-2" />
              <p className="text-gray-800 font-light text-sm">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


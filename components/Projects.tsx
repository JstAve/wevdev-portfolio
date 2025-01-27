'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'EcoTrack: Real-Time Garbage Truck Tracking with Proximity Alerts for Barangay Pamplona Uno Waste Collection',
    description: 'A mobile application designed to improve waste collection efficiency for Barangay Pamplona Uno. The app features GPS tracking for real-time garbage truck locations and proximity alerts to notify residents when the trucks are nearby, enhancing coordination between the community and waste management services.',
    image: '/eco.png?height=400&width=600',
    status: 'in-progress', // New status added
  },
  {
    title: 'Online Booking System for ElBriza De Silang Private Resort',
    description: 'An online booking system to streamline reservations and improve the user experience for guests. The system includes a calendar view for availability, secure online payment integration, and automated email notifications for booking confirmations.',
    image: '/desilang.png?height=400&width=600',
    link: 'https://bclma.io/elbriza/',
  },
  {
    title: 'Sitio Café Website',
    description: 'A modern and responsive website for Sitio Café to showcase their products, menu, and story. The website includes features like an online ordering system, customer reviews, and social media integration to enhance the café online presence.',
    image: '/Sitio.png?height=400&width=600',
    link: 'https://sito-cafe.netlify.app/?classId=f0f91f8e-27a4-462e-8800-cefbf4b42225&assignmentId=eab7c2fc-f5e5-456c-8e84-0c885857456d&submissionId=b694a307-798b-dd26-9071-b07348395831&fbclid=IwZXh0bgNhZW0CMTEAAR1QnmsytnNeeKa7dQ-VOlQgjivlKwBwga9inimIUvPAY56OMj36a4qTAIw_aem_X-4ZSdL671d0xrPcbSNEBQ',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was crafted with attention to detail and a focus on user experience.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-light text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.status === 'in-progress' ? (
                  <span className="text-gray-500 font-light italic">In Progress</span>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-gray-700 font-light transition-colors duration-300"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

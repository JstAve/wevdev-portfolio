'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS configuration
    const serviceID = 'service_ijqvg89'; // Replace with your EmailJS service ID
    const templateID = 'template_6h8tcdk'; // Replace with your EmailJS template ID
    const userID = '216uGFyEnXDZCfcS7'; // Replace with your actual public key

    const templateParams = {
      user_name: name, // Matches template variable {{user_name}}
      user_email: email, // Matches template variable {{user_email}}
      message, // Matches template variable {{message}}
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        () => {
          setStatus('Message sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('Failed to send message:', error);
          setStatus('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl font-light text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I would love to hear from you.
          </p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-light text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-light text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gray-900 text-white font-light py-3 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            Send Message
          </motion.button>
          {status && <p className="text-center text-sm mt-4 text-gray-600">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}

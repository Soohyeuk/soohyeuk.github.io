import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = ({ formKey, onSuccess }: { formKey: number; onSuccess: () => void }) => {
  const [state, handleSubmit] = useForm("meoakwjz");
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      // Clear inputs immediately
      setFormData({ email: '', message: '' });
      
      // Reset form after showing success message
      const timer = setTimeout(() => {
        onSuccess(); // Notify parent to reset form key
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onSuccess]);

  return (
    <form onSubmit={onSubmit} key={formKey} className="space-y-4 sm:space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 mb-1.5 sm:mb-2">
          Email
        </label>
        <motion.div 
          className="relative"
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-white/80 dark:bg-gray-800/80 border-2 border-cyan-500/30 dark:border-indigo-500/30 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 text-sm sm:text-base"
            placeholder="your.email@example.com"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-500 text-xs sm:text-sm mt-1"
          />
        </motion.div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 mb-1.5 sm:mb-2">
          Message
        </label>
        <motion.div 
          className="relative"
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-white/80 dark:bg-gray-800/80 border-2 border-cyan-500/30 dark:border-indigo-500/30 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 resize-none text-sm sm:text-base"
            placeholder="Your message..."
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-500 text-xs sm:text-sm mt-1"
          />
        </motion.div>
      </div>

      <div className="flex justify-end pt-1 sm:pt-2">
        <motion.button
          type="submit"
          disabled={state.submitting}
          className="bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-md hover:shadow-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {state.submitting ? (
            <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </div>
      
      {state.succeeded && (
        <motion.div 
          className="mt-4 p-3 sm:p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-center font-medium text-sm sm:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Message sent successfully! I'll get back to you soon.
        </motion.div>
      )}
    </form>
  );
};

const Contact = () => {
  const [formKey, setFormKey] = useState(0);

  const handleFormSuccess = () => {
    setFormKey(prev => prev + 1);
  };

  return (
    <div className="w-full max-w-3xl mx-auto contact-container">
      <motion.div 
        className="bg-gray-200/60 dark:bg-gray-700/50 rounded-xl p-6 sm:p-10 backdrop-blur-sm shadow-lg border border-gray-300/20 dark:border-gray-700/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl sm:text-3xl font-medium capitalize mb-8 sm:mb-12 text-gray-900 dark:text-gray-100">
          Contact Me
        </h2>
        
        <p className="text-gray-600 dark:text-gray-200 mb-8 sm:mb-10 text-base sm:text-lg">
          Feel free to reach out for collaborations, opportunities, or just to say hello! I'll get back to you as soon as possible.
          <span className="block mt-2 sm:mt-3 font-medium text-teal-500 dark:text-teal-400">
            soohyeuk0816@gmail.com
          </span>
        </p>

        <ContactForm key={formKey} formKey={formKey} onSuccess={handleFormSuccess} />
      </motion.div>

      {/* Add CSS to ensure proper dark mode */}
      <style>
        {`
          /* Dark mode overrides for Contact component */
          html.dark .contact-container .dark\\:bg-gray-700\\/50 {
            background-color: rgba(55, 65, 81, 0.5) !important;
          }
          
          html.dark .contact-container .dark\\:text-gray-100 {
            color: #f3f4f6 !important;
          }
          
          html.dark .contact-container .dark\\:text-gray-200 {
            color: #e5e7eb !important;
          }
          
          html.dark .contact-container .dark\\:text-teal-400 {
            color: #2dd4bf !important;
          }
          
          html.dark .contact-container .dark\\:bg-gray-800\\/80 {
            background-color: rgba(31, 41, 55, 0.8) !important;
          }
          
          html.dark .contact-container .dark\\:border-indigo-500\\/30 {
            border-color: rgba(99, 102, 241, 0.3) !important;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;

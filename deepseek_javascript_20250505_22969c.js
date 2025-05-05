import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen bg-eco-green text-white"
    >
      <div className="container mx-auto px-4 py-20">
        <motion.h1 
          className="text-6xl font-heading mb-6"
          animate={{ y: [-20, 0] }}
          transition={{ duration: 0.8 }}
        >
          Where Sustainability Meets Innovation
        </motion.h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-solar-orange px-8 py-3 rounded-lg text-lg"
        >
          Start Your Green Transition →
        </motion.button>
      </div>
    </motion.section>
  )
}
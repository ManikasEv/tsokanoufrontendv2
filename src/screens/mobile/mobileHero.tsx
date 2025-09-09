import { motion } from 'framer-motion';
import HeroImage from '../../assets/Hero.png';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.img 
        src={HeroImage} 
        alt="Kallisté Events Hero" 
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      />
      <motion.div 
        className="text-center py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-gray-800">Coming Soon</h2>
      </motion.div>
    </motion.div>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import HeroImage from '../../assets/Hero.png';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    > 
    <motion.img 
      src={HeroImage} 
      alt="Kallisté Events Hero" 
      className="w-full h-auto"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    />
    <motion.div 
      className="text-center py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-gray-800">Coming Soon</h2>
    </motion.div>
    </motion.div>
  );
};

export default Hero;

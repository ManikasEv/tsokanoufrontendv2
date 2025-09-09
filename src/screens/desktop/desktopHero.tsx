import HeroImage from '../../assets/Hero.png';

const Hero = () => {
  return (
    <div> 
    <img 
      src={HeroImage} 
      alt="Kallisté Events Hero" 
      className="w-full h-auto"
    />
    <div className="text-center py-8">
      <h2 className="text-4xl font-bold text-gray-800">Coming Soon</h2>
    </div>
    </div>
  );
};

export default Hero;

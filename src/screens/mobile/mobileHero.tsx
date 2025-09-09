import HeroImage from '../../assets/Hero.png';

const Hero = () => {
  return (
    <div>
      <img 
        src={HeroImage} 
        alt="Kallisté Events Hero" 
      />
      <div className="text-center py-6">
        <h2 className="text-2xl font-bold text-gray-800">Coming Soon</h2>
      </div>
    </div>
  );
};

export default Hero;

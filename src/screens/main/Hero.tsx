import DesktopHero from '../desktop/desktopHero';
import MobileHero from '../mobile/mobileHero';

const Hero = () => {
  return (
    <div>
      {/* Desktop Hero - hidden on mobile */}
      <div className="hidden md:block">
        <DesktopHero />
      </div>
      
      {/* Mobile Hero - hidden on desktop */}
      <div className="block md:hidden">
        <MobileHero />
      </div>
    </div>
  );
};

export default Hero;

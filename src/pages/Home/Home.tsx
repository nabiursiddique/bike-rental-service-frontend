import FeaturedBikes from '@/components/HomeComponents/FeaturedBikes/FeaturedBikes';
import HeroSection from '@/components/HomeComponents/HeroSection/HeroSection';
import Testimonials from '@/components/HomeComponents/Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedBikes />
      <Testimonials />
    </div>
  );
};

export default Home;

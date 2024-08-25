import FeaturedBikes from '@/components/HomeComponents/FeaturedBikes/FeaturedBikes';
import HeroSection from '@/components/HomeComponents/HeroSection/HeroSection';
import Testimonials from '@/components/HomeComponents/Testimonials/Testimonials';
import WhyChooseUs from '@/components/HomeComponents/WhyChooseUs/WhyChooseUs';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedBikes />
      <Testimonials />
      <WhyChooseUs />
    </div>
  );
};

export default Home;

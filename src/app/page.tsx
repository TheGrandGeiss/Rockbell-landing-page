import Footer from '@/component/footer';
import Hero from '@/component/hero';
import Navbar from '@/component/navbar';
import Services from '@/component/services';
import StatsBar from '@/component/statsBar';
import Story from '@/component/story';
import Testimonials from '@/component/testimonials';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <Story />
      <Testimonials />
      <Footer />
    </>
  );
}

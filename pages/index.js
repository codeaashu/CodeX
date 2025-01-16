import { ContactUs, Footer, Navbar } from '../components';
import {
  About,
  Explore,
  Feedback,
  Hero,
  World,
  Prizes,
  Schedule,
  Team,
  Communitypartner,
} from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <Prizes />
      <Schedule />
      <Feedback />
      <Communitypartner />
      <div className="gradient-04 z-0" />
    </div>
    <World />
    <div className="relative">
      <Team />
      <div className="gradient-04 z-0" />
    </div>
    <ContactUs />
    <Footer />
  </div>
);

export default Home;

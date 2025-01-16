import { TeamGuidelines, Navbar, Footer } from '../components';

const guidelines = () => (
  <div className="bg-primary-black overflow-hidden relative">
    <Navbar />
    <div className="gradient-01 z-0" />
    <TeamGuidelines />
    <Footer />
  </div>
);

export default guidelines;

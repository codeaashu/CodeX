import { Navbar, Footer } from '../components';
import MentorList from "../components/MentorList";

const mentorlist = () => (
  <div className="bg-primary-black overflow-hidden relative">
    <Navbar />
    <div className="gradient-05 " />
    <MentorList />
    <Footer />
  </div>
);

export default mentorlist;

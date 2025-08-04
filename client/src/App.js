import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage/AboutPage";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import SkillSet from "./pages/SkillSet/skillset";
import WorkExperience from "./pages/WorkExperience/WorkExperience";
import Certification from "./pages/Certifications/certification";
import ContactInfo from "./pages/ContactInfo/ContactInfo";
import ScrollToTop from "react-scroll-to-top";

import "./App.css";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  return (
    <>
      <div>
        <MobileNav />
        <Layout />
        <div className="row edu-about-row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12 edu-section">
            <Education/>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12 about-section">
            <AboutPage />
          </div>
        </div>
        <SkillSet />
        <Projects />
        <WorkExperience />
        <Certification />
        <ContactInfo />
      </div>
      <div className="footer">
        <p className="text-center">Made By Arshea💜</p>
      </div>
      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "#323e4f" }}
      />
    </>
  );
}

export default App;

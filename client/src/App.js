import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage/AboutPage";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import SkillSet from "./pages/SkillSet/skillset";
import WorkExperience from "./pages/WorkExperience/WorkExperience";
import Certification from "./pages/Certifications/certification"
function App() {
  return (
    <div>
      <Layout />
      <AboutPage />
      <Education />
      <SkillSet />
      <Projects />
      <WorkExperience />
      <Certification />
    </div>
  );
}

export default App;

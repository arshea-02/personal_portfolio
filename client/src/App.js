import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage/AboutPage";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import SkillSet from "./pages/SkillSet/skillset";
import WorkExperience from "./pages/WorkExperience/WorkExperience";
function App() {
  return (
    <div>
      <Layout />
      <AboutPage />
      <Education />
      <SkillSet />
      <Projects />
      <WorkExperience />
    </div>
  );
}

export default App;

import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage/AboutPage";
import Education from "./pages/Education/Education";
import Projects from "./pages/Projects/Projects";
import SkillSet from "./pages/SkillSet/skillset";
function App() {
  return (
    <div>
      <Layout />
      <AboutPage />
      <Education />
      <SkillSet />
      <Projects />
    </div>
  );
}

export default App;

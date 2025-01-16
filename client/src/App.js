import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage/AboutPage";
import Projects from "./pages/Projects/Projects";
import SkillSet from "./pages/SkillSet/skillset";
function App() {
  return (
    <div>
      <Layout />
      <AboutPage />
      <SkillSet />
      <Projects />
    </div>
  );
}

export default App;

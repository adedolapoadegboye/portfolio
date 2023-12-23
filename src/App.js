import "./App.css";
import About from "./Components/About";
import Education from "./Components/Education";
import Header from "./Components/Header";
import PageFooter from "./Components/PageFooter";
import Projects from "./Components/Projects";
import Recommendations from "./Components/Recommendations";
import SideNav from "./Components/SideNav";
import Socials from "./Components/Socials";
import WorkExperience from "./Components/WorkExperience";
import Animation from "./Components/Animation";

function App() {
  return (
    <div className="text-white bg-slate-900 pb-5 scroll-smooth">
      <div className="flex flex-col lg:flex-row py-[40px] lg:py-[80px] px-[40px] lg:px-[100px] xl:px-[] bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 h-fit">
        <div className="lg:flex lg:flex-col lg:justify-between w-full h-full lg:w-1/2  sticky lg:top-[80px] lg:left-[100px]">
          <Header />
          <Socials />
          <br></br>
          <SideNav />
          <br></br>
          <Animation />
        </div>
        <div className="h-full w-full lg:w-1/2">
          <div className="w-full h-fit">
            <About />
            <Projects />
            <WorkExperience />
            <Education />
            <Recommendations />
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="pt-5">
        <PageFooter />
      </div>
    </div>
  );
}

export default App;

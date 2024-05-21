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
// import DancingUnicorn from "./Components/DancingUnicorn";

function App() {
  return (
    <div className="flex flex-col gap-16 md:gap-20text-white bg-slate-900 scroll-smooth">
      <div className="flex flex-col md:flex-row py-[40px] md:py-[80px] px-[40px] md:px-[100px] bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 h-fit">
        <div className="md:flex md:flex-col md:justify-between w-full h-full md:w-1/2  sticky md:top-[80px] md:left-[100px] md:px-20">
          <Header />
          <Socials />
          <br></br>
          <SideNav />
          <br></br>
          {/* <DancingUnicorn heading={"Fun Fact"} /> */}
          <Animation />
        </div>
        <div className="h-full w-full lg:w-1/2">
          <div className="flex flex-col gap-5 md:gap-10 w-full h-fit">
            <About />
            <Projects />
            <WorkExperience />
            <Education />
            <Recommendations />
          </div>
        </div>
      </div>
      <div className="pt-5">
        <PageFooter />
      </div>
    </div>
  );
}

export default App;

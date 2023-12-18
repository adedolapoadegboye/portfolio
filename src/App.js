import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import SideNav from "./Components/SideNav";
import Socials from "./Components/Socials";

function App() {
  return (
    <div className="flex flex-col lg:flex-row py-[40px] lg:py-[80px] px-[40px] lg:px-[100px] bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 h-fit w-screen">
      <div className="lg:flex lg:flex-col lg:justify-between lg:h-[calc(100vh-200px)] w-full h-fit lg:w-1/2">
        <Header />
        <SideNav />
        <Socials />
      </div>
      <div className="h-full w-full lg:w-1/2">
        <div className="w-full h-fit">
          <About />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;

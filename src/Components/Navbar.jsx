import { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsSunFill, BsList } from "react-icons/bs";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navPos, setNavPos] = useState(-80);
  const [darkMode, setDarkMode] = useState(true);

  function GoToSection(sectionId) {
    console.log("click");

    const section = document.getElementById(sectionId);
    console.log(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      console.log("click2");
    }
  }

  //Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        // Scroll down, hide navbar
        // setTopValue("-100px");
        //setNavOpacity("rgba(0, 0, 0, 0.5)");
      } else {
        // Scroll upp, show navbar
        //setTopValue("0px");
      }

      // If navbar at top, hide navbar background
      if (window.scrollY === 0) {
        setNavOpacity("rgba(0, 0, 0, 0)");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  function ClassicNavLinks({ children, sectionId }) {
    return (
      <button
        onClick={() => GoToSection(sectionId)}
        className=" rounded-full dark:text-gray-200 text-slate-900 py-2 md:hover:bg-slate-400"
      >
        <a className="  mx-2">{children}</a>
      </button>
    );
  }

  //Fade in navbar
  useEffect(() => {
    setTimeout(() => {
      setNavPos(0);
    }, 0);
    document.documentElement.classList.add("dark");

    document.body.classList.remove("lighter");
    document.body.classList.add("darker");
    document.body.classList.add("loaded");
  }, []);

  function DarkModeToggle() {
    if (darkMode) {
      document.body.classList.remove("darker");
      document.body.classList.add("lighter");
      setDarkMode(false);
    } else {
      document.body.classList.remove("lighter");
      document.body.classList.add("darker");
      setDarkMode(true);
    }

    document.documentElement.classList.toggle("dark");
  }

  function DarkModeButton() {
    return (
      <button
        className="arkmode-icon mx-1 hover:text-slate-500 flex items-center px-3 text-xl"
        onClick={() => DarkModeToggle()}
      >
        {darkMode ? <BsSunFill /> : <BsFillMoonStarsFill />}
      </button>
    );
  }

  return (
    <>
      <div
        className="navbar-containe dark:text-gray-200 text-slate-900 sticky flex justify-center items-center 
         z-20 transition-top ease-in-out duration-300 body-text-medium pointer-events-none"
        style={{
          top: "0",
          transform: `translateY(${navPos}px)`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className="nav-links overflow-hidden pointer-events-auto">
          <ul className="flex">
            <a
              className="arkmode-icon hover:text-slate-500 flex "
              href="https://www.google.se"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <li
              className="navlinks-classic dark:bg-gray-200/20 bg-gray-600/20  bg-opacity-5 rounded-full md:px-5 px-3 py-2 
              md:text-[1rem] text-[3.5vw] backdrop-blur-xl mt-5 overflow-hidden"
            >
              <div className="flex gap-0 items-center">
                <ClassicNavLinks sectionId="toolkit">Toolkit</ClassicNavLinks>
                <ClassicNavLinks sectionId="projects">Projects</ClassicNavLinks>
                <div className="darkmode-normal">
                  <DarkModeButton />
                </div>
                <ClassicNavLinks sectionId="experience">Experience</ClassicNavLinks>
                <ClassicNavLinks sectionId="contact">Contact</ClassicNavLinks>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

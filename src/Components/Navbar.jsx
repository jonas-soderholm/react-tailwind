import { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsList } from "react-icons/bs";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [IsBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [topValue, setTopValue] = useState("-100px");
  const [navOpacity, setNavOpacity] = useState("rgba(0, 0, 0, 0)");

  const handleBurgerClick = () => {
    setIsBurgerMenuOpen((prevCheck) => !prevCheck);

    if (IsBurgerMenuOpen) {
      setNavOpacity("rgba(0, 0, 0, 0.5)");
      document.body.style.overflow = "auto";
    } else {
      setNavOpacity("rgba(0, 0, 0, 0)");
      document.body.style.overflow = "hidden";
    }

    if (window.scrollY === 0) {
      setNavOpacity("rgba(0, 0, 0, 0)");
    }
  };

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        // Scroll down, hide navbar
        setTopValue("-100px");
      } else {
        // Scroll upp, show navbar
        setTopValue("0px");
        setNavOpacity("rgba(0, 0, 0, 0.5)");
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

  function BurgerNavLinks({ href, children }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 rounded-md text-center text-white hover:text-slate-400 mx-4"
      >
        {children}
      </a>
    );
  }

  function ClassicNavLinks({ href, children }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className=" rounded-md text-center text-white hover:text-slate-400 mx-1"
      >
        {children}
      </a>
    );
  }

  function ResumeAndGitButtons({ resumeUrl, gitRepoUrl }) {
    return (
      <>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn bg-transparent text-gray-200 hover:text-slate-400 hover:border-gray-400 p-1.5 ml-3 rounded-lg border-2 border-gray-200"
        >
          <button>Resume</button>
        </a>

        <a
          href={gitRepoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-btn hover:bg-gray-400 bg-gray-200  text-black p-2 ml-3 rounded-lg "
        >
          <button>Git repo</button>
        </a>
      </>
    );
  }

  return (
    <>
      <div
        className="navbar-container flex justify-between items-center p-5
        text-gray-200 sticky z-20 transition-top ease-in-out duration-300"
        style={{
          top: topValue,
          backgroundColor: navOpacity,
        }}
      >
        <div className="location-info flex items-center w-11 h-auto">
          <a
            href="https://www.google.com/maps/place/Upplands+V%C3%A4sby/@59.5088298,17.7661925,11z/data=!3m1!4b1!4m6!3m5!1s0x465f9780c4285cc1:0xd711b434ff6818b9!8m2!3d59.51961!4d17.92834!16s%2Fm%2F02vk769?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/sweden-flag.png" alt="" />
          </a>
        </div>
        <div className="nav-links">
          <ul className="flex text-1xl items-center ">
            <a
              className="darkmode-icon mx-4 hover:text-slate-500"
              href="https://www.google.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFillMoonStarsFill />
            </a>
            <li className="navlinks-classic flex">
              <div
                className=" items-center hidden md:flex gap-3 "
                style={{
                  visibility: "flex",
                }}
              >
                <ClassicNavLinks href="https://www.google.se">Toolkit</ClassicNavLinks>
                <ClassicNavLinks href="https://www.google.se">Projects</ClassicNavLinks>
                <ClassicNavLinks href="https://www.google.se">Experience</ClassicNavLinks>
                <ClassicNavLinks href="https://www.google.se">Contact</ClassicNavLinks>
              </div>
              <ResumeAndGitButtons resumeUrl="https://www.google.com" gitRepoUrl="https://www.google.com" />
            </li>
            <li className="burger-menu">
              <button
                className="z-30 relative md:hidden "
                onClick={handleBurgerClick}
                style={{
                  fontSize: "35px",
                  border: "2px solid white",
                  borderRadius: "10px",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                <BsList className="burger-btn hover:text-gray-400" />
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="dropdown-menu"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(4, 4, 4, 0.9)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          // height: "100%",
          height: IsBurgerMenuOpen ? "100%" : "0%",
          // display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: "10",
          transition: "height 0.3s ease-in-out",
          overflow: "hidden",
        }}
      >
        <ul className="">
          <li className="flex flex-col font-bold text-white text-3xl gap-10 z-40 mt-32">
            <BurgerNavLinks href="https://www.google.se">Toolkit</BurgerNavLinks>
            <BurgerNavLinks href="https://www.google.se">Projects</BurgerNavLinks>
            <BurgerNavLinks href="https://www.google.se">Experience</BurgerNavLinks>
            <BurgerNavLinks href="https://www.google.se">Contact</BurgerNavLinks>
            <BurgerNavLinks href="https://www.google.se">Git Repo</BurgerNavLinks>
            <BurgerNavLinks href="https://www.google.se">CV</BurgerNavLinks>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

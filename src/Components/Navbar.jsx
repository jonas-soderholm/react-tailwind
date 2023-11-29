import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="Navbar flex justify-between items-center p-5
        bg-slate-900 text-white"
      >
        <h1 className="text-4xl">H</h1>
        <div className="nav-links">
          <ul className="flex gap-4 text-1xl items-center">
            <li>
              <BsFillMoonStarsFill />
            </li>
            <li>
              <button className="git-btn bg-transparent text-white p-1.5 ml-3 rounded-lg border-2 border-cyan-500 ">
                Resume
              </button>
              <button className="git-btn  bg-cyan-500 text-white p-2 ml-3 rounded-lg ">
                Git repos
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

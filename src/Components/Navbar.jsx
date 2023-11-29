import { useState } from "react";
import { BsFillMoonStarsFill, BsList } from "react-icons/bs";

function Navbar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="Navbar flex justify-between items-center p-5
        bg-transparent text-gray-200 "
      >
        <div className="flex items-center">
          <img src="/sweden-flag.png" alt="" className="w-11 h-auto" />
          {/* <div className="ml-2">
            <h2 style={{ fontSize: "10px" }}>Stockholm</h2>
            <h2 style={{ fontSize: "10px" }}>Sweden</h2>
          </div> */}
        </div>
        <div className="nav-links">
          <ul className="flex gap-4 text-1xl items-center">
            <li className="">
              <BsFillMoonStarsFill />
            </li>
            <li>
              <button className="git-btn bg-transparent text-gray-200  p-1.5 ml-3 rounded-lg border-2 border-gray-200  ">
                Resume
              </button>
              <button className="git-btn  bg-gray-200  text-black p-2 ml-3 rounded-lg ">
                Git repos
              </button>
            </li>
            <li>
              <BsList style={{ fontSize: "35px" }} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

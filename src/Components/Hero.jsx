function AddStar({ positionX, positionY }) {
  const starSize = 5;

  return (
    <div
      className="stars absolute"
      style={{
        top: positionY, // Adjusted positioning relative to the text container
        left: positionX, // Adjusted positioning relative to the text container
        width: `${starSize}vw`, // Set the width relative to viewport width
        height: `${starSize}vw`, // Set the height relative to viewport width
      }}
    >
      <img src="./ai-star.svg" alt="" />
    </div>
  );
}

function Hero() {
  return (
    <div className="main-container bg-transparent">
      <div className="hero-content mx-4 bg-stone-900 text-white rounded-xl shadow-2xl h-[85vh] flex flex-col justify-center overflow-hidden">
        <div className="w-full overflow-x-hidden"></div>
        <div className="p-0 bg-stone-900 flex justify-between gap-2 relative">
          <div className="text-center p-5 py-5 flex-1">
            <h2 className="font-Heebo font-bold py-0 text-gray-200 mb-6 md:text-[7vw] text-6xl header-font">
              Hi. I'm Jonas <span style={{ display: "block" }}>A Developer</span>
            </h2>
            <h3 className="font-Heebo font-bold text-2xl py-0 text-green-500 md:text-3xl ">
              An Agile Developer and Designer.
            </h3>
            <p className="text-md py-2 dark:text-gray-200 max-w-xl mx-auto text-s font-bold">
              Former vr game developer pursuing his love for web development with 3D skills in his pockets.
            </p>
          </div>
          {/* <AddStar positionX="80%" positionY="-20%" />
          <AddStar positionX="35%" positionY="-35%" />
          <AddStar positionX="5%" positionY="15%" /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;

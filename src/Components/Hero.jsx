function Hero() {
  return (
    <div className="main-container bg-transparent">
      <div className="hero-content mx-4 bg-stone-900 text-white rounded-xl border border-gray-500 h-[85vh] flex flex-col justify-center overflow-hidden">
        <div className="w-full overflow-x-hidden"></div>
        <div className="p-0 bg-stone-900 flex flex-wrap-reverse justify-between gap-2">
          <div className="text-center p-5 py-5 flex-1">
            <h2 className="font-Heebo font-bold text-5xl py-0 text-gray-200 md:text-6xl">
              Jonas Söderholm
            </h2>
            <h3 className="font-Heebo font-bold text-2xl py-0 text-green-500 md:text-3xl">
              Developer, designer and agile.
            </h3>
            <p className="text-md py-2 dark:text-gray-200 max-w-xl mx-auto text-s">
              Former vr game developer pursuing his love for web development
              with 3D skills in his pockets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

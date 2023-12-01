function Contact() {
  return (
    <div>
      <section className="text-gray-700 body-font ">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="font-bold text-gray-300 text-7xl my-36 mb-28">
              Let's talk! :{")"}
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap ">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-5 w-full">
                <button className="flex mx-auto text-black bg-gray-300 border-0 py-2 px-8 focus:outline-none hover:bg-gray-500 rounded text-lg">
                  Send
                </button>
              </div>
              <div className="p-2 w-full pt-5 mt-2  text-center">
                <a className="text-gray-300">jonas.soderholm89@gmail.com</a>
                <p className="leading-normal mt-3 mb-2 text-gray-300">
                  Stockholm, Sweden
                </p>
                <span
                  role="img"
                  aria-label="heart"
                  style={{
                    color: "red",
                    fontSize: "40px",
                    verticalAlign: "middle",
                  }}
                >
                  ❤️
                </span>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

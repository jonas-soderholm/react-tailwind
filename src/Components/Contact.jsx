function Contact() {
  return (
    <div className="contact-container px-4 mx-auto">
      <h1 className="flex flex-col items-center font-bold text-gray-300 text-4xl my-20 mb-1 md:text-7xl text-4xl header-font">
        Let's talk! :)
      </h1>
      <div className="flex flex-wrap justify-center lg:w-1/2 md:w-2/3 mx-auto">
        <div className="p-2 w-full pt-5 mt-0 text-center">
          <a className="text-gray-300">jonas.soderholm89@gmail.com</a>
          <p className="leading-normal mt-3 mb-6 text-gray-300">Stockholm, Sweden</p>
          <div className="text-gray-300 mb-6 text-4xl">❤️</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

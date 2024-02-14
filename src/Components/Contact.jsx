function Contact() {
  return (
    <div id="contact" className="contact-container my-36">
      <h1 className="contact-header flex flex-col items-center font-bold text-gray-300 mb-2 md:text-7xl text-4xl header-font">
        Let's talk! :)
      </h1>
      <div className="contact-info body-text-medium">
        <div className="pt-2 text-center">
          <a className="text-gray-300 ">jonas.soderholm89@gmail.com</a>
          <p className="mt-3 mb-6 text-gray-300">Stockholm, Sweden</p>
          <div className="icon text-gray-300 text-4xl">❤️</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

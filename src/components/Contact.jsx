import { useDarkMode } from "./DarkModeContext";

function Contact() {
  const { darkMode } = useDarkMode();

  return (
    <div id="contact" className={`${darkMode ? "text-dark" : "text-light"} contact-container py-36 `}>
      <h1 className="contact-header flex flex-col items-center font-bold mb-2 md:text-7xl text-4xl header-font">
        Let's talk! :)
      </h1>
      <div className="contact-info body-text-medium">
        <div className="pt-2 text-center">
          <a className="">jonas.soderholm89@gmail.com</a>
          <p className="mt-3 mb-6">Stockholm, Sweden</p>
          <div className="icon text-4xl">❤️</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

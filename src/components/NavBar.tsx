import { useTranslation } from "react-i18next";
import { useState } from "react";

const NavBar = () => {
  const [t, i18n] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="container mx-auto px-4 py-2">
      <div className="flex justify-between items-center z-0">
        <div className="flex items-center flex-shrink-0">
          <a href={"#header"} className="flex items-center">
            <img src="/favicon.png" alt="logo" width={45} height={45} />
            <span className="font-montserrat text-primary font-semibold pl-5 whitespace-nowrap hover:text-black">
              {t("global.title")}
            </span>
          </a>
        </div>

        <div className="hidden lg:flex items-center font-montserrat justify-center space-x-8">
          <a
            href="#"
            className="inline-block w-44 text-center font-bold hover:text-primary hover:underline transition"
          >
            {t("global.ourServices")}
          </a>
          <a
            href="#"
            className="inline-block w-44 text-center font-bold hover:text-primary whitespace-nowrap hover:underline transition"
          >
            {t("global.featuresAndServices")}
          </a>
          <a
            href="#"
            className="inline-block w-44 text-center font-bold whitespace-nowrap hover:text-primary hover:underline transition"
          >
            {t("global.contactUs")}
          </a>
          <div className="flex text-xl gap-3">
            <button onClick={() => handleChangeLanguage("en")}>🇬🇧</button>
            <button onClick={() => handleChangeLanguage("ru")}>🇷🇺</button>
            <button onClick={() => handleChangeLanguage("tm")}>🇹🇲</button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-primary">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden font-montserrat absolute mx-auto bg-primary inset-x-0 space-y-5 flex flex-col items-center gap-4 mt-2 text-white text-lg font-bold z-30">
          <a href="#" className="block w-full text-center py-2">
            {t("global.ourServices")}
          </a>
          <a href="#" className="block w-full text-center py-2">
            {t("global.featuresAndServices")}
          </a>
          <a href="#" className="block w-full text-center py-2">
            {t("global.contactUs")}
          </a>
          <div className="flex text-3xl gap-3">
            <button onClick={() => handleChangeLanguage("en")}>🇬🇧</button>
            <button onClick={() => handleChangeLanguage("ru")}>🇷🇺</button>
            <button onClick={() => handleChangeLanguage("tm")}>🇹🇲</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

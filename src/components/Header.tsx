import { useTranslation } from "react-i18next";
import { useState } from "react";

const Header = () => {
  const [t, i18n] = useTranslation("global");
  const [isOpen, setIsOpen] = useState(false);

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center md:justify-center">
          <div className="flex">
            <a href="#" className="flex items-center">
              <img src="/favicon.jpg" alt="logo" width={50} height={50} />
              <span className="font-montserrat text-blue-600 font-semibold pl-5">
                {t("navbar.title")}
              </span>
            </a>
          </div>
          <div className="hidden text-lg font-bold md:flex items-center space-x-1">
            <a href="#" className="py-5 px-3 text-slate-600">
              {t("navbar.whatWeDo")}
            </a>
            <a href="#" className="py-5 px-3 text-slate-600">
              {t("navbar.featuresAndServices")}
            </a>
            <a href="#" className="py-5 px-3 text-slate-600">
              {t("navbar.contactUs")}
            </a>
            <button onClick={() => handleChangeLanguage("en")}>🇬🇧</button>
            <button onClick={() => handleChangeLanguage("ru")}>🇷🇺</button>
            <button onClick={() => handleChangeLanguage("tm")}>🇹🇲</button>
          </div>
          <div className="md:hidden flex items-center">
            <button className="" onClick={() => setIsOpen(!isOpen)}>
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
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block py-2 px-4 text-sm">
            {t("navbar.whatWeDo")}
          </a>
          <a href="#" className="block py-2 px-4 text-sm">
            {t("navbar.featuresAndServices")}
          </a>
          <a href="#" className="block py-2 px-4 text-sm">
            {t("navbar.contactUs")}
          </a>
          <button onClick={() => handleChangeLanguage("en")}>🇬🇧</button>
          <button onClick={() => handleChangeLanguage("ru")}>🇷🇺</button>
          <button onClick={() => handleChangeLanguage("tm")}>🇹🇲</button>
        </div>
      )}
    </nav>

    // <div>
    //     <h1>{t("header.message")}</h1>
    //     <button onClick={() =>handleChangeLanguage("en")}>EN</button>
    //     <button onClick={() =>handleChangeLanguage("ru")}>RU</button>
    // </div>
  );
};

export default Header;

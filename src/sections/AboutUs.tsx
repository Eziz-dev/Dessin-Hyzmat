import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const [t] = useTranslation("global");

  return (
    <section id="aboutUs" className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start md:space-x-6">

        <div className="flex-shrink-0 mb-4 md:mb-0">
          <img
            src="/favicon.png"
            alt="Dessin Hyzmat Logo"
            className="w-24 md:w-36"
          />
        </div>

        <div className="font-montserrat text-center md:text-left">
          <h2 className="text-2xl font-bold text-primary mb-3">
              {t("aboutUs.title")}
          </h2>
          <p className="text-justify text-gray-600">
              {t("aboutUs.text")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

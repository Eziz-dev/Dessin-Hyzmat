import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation("global");

  return (
    <footer id="contactUs" className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-center md:space-x-10 lg:space-x-40 text-center px-4 md:text-left">
        <div className="font-montserrat mb-4">
          <h3 className="text-xl font-bold text-white">{t("global.title")}</h3>
          <p className="mt-2">
            {t("footer.country")} <br />
            {t("footer.street")} <br />
            {t("footer.postal")}
          </p>
        </div>

        <div className="font-montserrat space-y-1">
          <p>
            <strong>{t("footer.phone")}</strong>{" "}
            <a href="tel:+99365628388" className="text-blue-400">
              +993 65 62-83-88
            </a>
          </p>
          <p>
            <strong>{t("footer.fax")}</strong>
            <a href="tel:+99312473991" className="text-blue-400">
              +993 12 47 39 91
            </a>
          </p>
          <p>
            <strong>E-mail:</strong>{" "}
            <a
              href="mailto:guych@dessinhyzmat.com"
              className="text-blue-400 hover:underline"
            >
              guych@dessinhyzmat.com
            </a>
          </p>
          <p>
            <strong>Web:</strong>{" "}
            <a
              href="http://www.dessinhyzmat.com"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.dessinhyzmat.com
            </a>
          </p>
        </div>
      </div>

      <div className="font-montserrat border-t border-gray-700  pt-4 text-sm text-gray-400 text-center">
        © {new Date().getFullYear()} {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default Footer;

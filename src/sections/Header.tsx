import { useTranslation } from "react-i18next";
import Button from "../components/Button.tsx";

const Header = () => {
  const [t] = useTranslation("global");

  return (
    <section className="h-[34rem] lg:h-screen bg-center bg-cover bg-[url('/header-bg.jpg')]">
      <div className="h-[34rem] lg:h-screen bg-black/70 flex justify-center text-center pt-20 px-1">
        <div className="container font-montserrat">
          <h1 className="text-primary font-bold text-2xl px-2 md:text-3xl lg:text-4xl lg:px-12 xl:text-5xl xl:pt-14 2xl:text-6xl">
            {t("header.title")}
          </h1>
          <h2 className="text-white text-xl px-2 pt-5 md:text-2xl lg:pt-8 lg:px-8 xl:text-4xl xl:px-12 xl:pt-12 2xl:text-5xl">{t("header.h1")}</h2>
            <Button className="bg-primary font-bold text-black rounded-xl px-5 py-2 mt-10 2xl:text-2xl" title={t("header.contactUs")} />
        </div>
      </div>
    </section>
  );
};

export default Header;

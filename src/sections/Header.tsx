import { useTranslation } from "react-i18next";

const Header = () => {
  const [t] = useTranslation("global");

  return (
    <section className="h-[32rem] bg-center bg-cover bg-[url('/header-bg.jpg')]">
      <div className="bg-black/60 flex h-[32rem] justify-center pt-7 px-1">
        <div className="container font-montserrat">
          <h1 className="text-primary font-bold text-2xl px-2">
            {t("header.title")}
          </h1>
          <h2 className="text-white text-xl">{t("header.h1")}</h2>
        </div>
      </div>
    </section>
  );
};

export default Header;

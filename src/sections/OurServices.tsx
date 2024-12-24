import Card from "../components/Card.tsx";
import { useTranslation } from "react-i18next";

const OurServices = () => {
  const [t] = useTranslation("global");

  return (
    <section id="OurServices" className="bg-cover h-full bg-center bg-[url('/services-bg2.jpg')]">
      <div className="container mx-auto">
        <h2 className="font-montserrat font-bold text-white text-center text-4xl py-5 lg:text-5xl lg:py-10">
          {t("global.ourServices")}
        </h2>
        <div className="font-montserrat grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-3 pb-5">
          <Card
            src="/plane.jpg"
            alt="plane"
            heading={t("card.air.title")}
            text={t("card.air.text")}
          />
          <Card
            src="/sea3.jpg"
            alt="ship"
            heading={t("card.sea.title")}
            text={t("card.sea.text")}
          />
          <Card
            src="/train1.jpg"
            alt="train"
            heading={t("card.rail.title")}
            text={t("card.rail.text")}
          />
          <Card
            src="/truck.jpg"
            alt="truck"
            heading={t("card.truck.title")}
            text={t("card.truck.text")}
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;

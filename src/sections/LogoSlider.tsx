import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

const LogoSlider = () => {
  const [t] = useTranslation("global");

  return (
    <div className="bg-gray-100">
      <h3 className="container mx-auto font-montserrat bg-gray-100 text-2xl text-center font-bold text-primary md:text-end pb-3">
        {t("global.ourPartners")}
      </h3>

      <div className="bg-gray-100 py-3">
        <Marquee speed={50} pauseOnHover={false} autoFill={true}>
          <div className="flex gap-5">
            <img
              src="/ae-black.png"
              alt="logo-1"
              className="h-12 opacity-80 hover:opacity-100 transition"
            />
            <img
              src="/gertner-group.png"
              alt="logo-2"
              className="h-12 opacity-80 hover:opacity-100 transition"
            />

            <img
              src="/rema-tip-top.svg"
              alt="logo-3"
              className="h-12 opacity-80 hover:opacity-100 transition"
            />
            <img
              src="/jenbacher.png"
              alt="logo-4"
              className="h-12 opacity-80 hover:opacity-100 transition"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default LogoSlider;

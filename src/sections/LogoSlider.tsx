import Marquee from "react-fast-marquee";

const LogoSlider = () => {
  return (
    <div className="bg-primary py-1">
      <Marquee speed={50} pauseOnHover={false} autoFill={true}>
          <div className="flex gap-5">
              <img
                  src="/alageum-electric.png"
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
  );
};

export default LogoSlider;
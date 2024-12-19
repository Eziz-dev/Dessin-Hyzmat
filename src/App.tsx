import "./fonts.css";
import "./index.css";
import NavBar from "./components/NavBar.tsx";
import Header from "./sections/Header.tsx";
import LogoSlider from "./sections/LogoSlider.tsx";
import OurServices from "./sections/OurServices.tsx";
import AboutUs from "./sections/AboutUs.tsx";
import Footer from "./sections/Footer.tsx";

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <OurServices />
      <AboutUs />
      <LogoSlider />
      <Footer />
    </>
  );
};

export default App;

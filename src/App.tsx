import "./fonts.css";
import "./index.css";
import NavBar from "./components/NavBar.tsx";
import Header from "./sections/Header.tsx";
import LogoSlider from "./sections/LogoSlider.tsx";
import OurServices from "./sections/OurServices.tsx";

const App = () => {
  return (
    <>
      <NavBar />
      <LogoSlider />
      <Header />
      <OurServices />
    </>
  );
};

export default App;

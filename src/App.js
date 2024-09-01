import Welcome_Carousel from "./components/Carousel";
import Footer from "./components/footer";
import Slider from "./components/Slider";
import Landing_page from "./containers/Landing_page";

const { NavbarDefault } = require("./components/Navbar");

function App() {
  return (
    <>
     <NavbarDefault></NavbarDefault>
     <Landing_page></Landing_page>
     {/* <Slider></Slider> */}
     <Footer></Footer>
     </>
  );
}

export default App;

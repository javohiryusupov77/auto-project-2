import "./App.css";
import Header from "./component/header";
import CaruselHeader from "./component/Carusel/CaruselHeader";
import Footer from "./component/footer";
import Filters from "./pages/Filters";
import Katalog from "./pages/Katalog";
import WhyWe from "./pages/WhyWe";
import AboutUs from "./pages/AboutUs";
import CarsLogo from "./pages/CarsLogo";
import StillSelecting from "./pages/StillSelecting";
import News from "./pages/News";
import Comments from "./pages/comments";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <CaruselHeader />
        <Filters />
        <Katalog />
        <WhyWe />
        <AboutUs />
        <CarsLogo/>
        <StillSelecting/>
        <News/>
        <Comments />
      </div>
      <Footer />
    </div>
  );
}

export default App;

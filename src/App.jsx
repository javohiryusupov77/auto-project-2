import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/mainPage";
import AboutCarsPage from "./pages/AboutCarsPage";
import CarDetails from "./components/CarDetails";
import { AutoCarsProvider } from "./components/AutoCarsContext";

function App() {
  return (
    <AutoCarsProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <div className="w-full max-w-[1440px] mx-auto flex-grow">
            <Header />
            <div className="flex-grow flex justify-center">
              <div className="w-full max-w-[1440px]">
                <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/about-cars" element={<AboutCarsPage />} />
                  <Route path="/about-cars/:id" element={<CarDetails />} />
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </AutoCarsProvider>
  );
}

export default App;

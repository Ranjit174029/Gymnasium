import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import BgImage from "./assets/bg.png";
import Equipments from "./components/Equipments/Equipments";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

function App() {
  return (
    <div className="overflow-y-hidden">

      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>

      <Equipments/>

    </div>
  );
}

export default App;

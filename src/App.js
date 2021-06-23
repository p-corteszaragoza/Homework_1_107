import "./App.css";
import NavBar from "./components/navBar";
import FooterBar from "./components/footerBar";
import QuantityPicker from "./components/quantityPicker";
import InfoBottomBar from "./components/infoBottomBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div>
        <h1> Welcome to Organika online store! </h1>
        <button className="btn btn-primary">Buy Now! </button>
      </div>
      <QuantityPicker></QuantityPicker>
      <InfoBottomBar></InfoBottomBar>
      <FooterBar></FooterBar>
    </div>
  );
}

export default App;

import './App.css';
import Header from "./components/Header";
import GiftsContainer from "./components/GiftsContainer";
import Footer from "./components/Footer";
import InfoContainer from "./components/InfoContainer";

function App() {
  return (
    <div className="App">
        <Header/>
        <InfoContainer/>
        <GiftsContainer/>
        <Footer/>
    </div>
  );
}

export default App;

import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidenav from "./components/Sidenav";
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Sidenav />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;

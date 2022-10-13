import Header from "../src/Layout/components/Header.js";
import LeftMenu from "../src/Layout/components/LeftMenu";
import Home from "../src/Layout/Home";
import "./assets/custom.css";

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <LeftMenu />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;

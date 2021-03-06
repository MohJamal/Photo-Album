import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

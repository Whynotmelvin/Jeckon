import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/pages/About";
import Career from "./components/pages/Careers";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Banner from "./components/pages/Banner";
import Footer from "./components/pages/Footer";
import Testimonies from "./components/pages/Testimonies";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jekon  Publishers</title>
        <link rel="canonical" href="" />
        <meta name="description" content="A publsihing booking for producing excercise books for children in Nigeria" />
      </Helmet>

      <Navbar />
      <Home />
      <About />
      <Career />
      <Testimonies />
      <Footer />
    </div>
  );
}
export default App;

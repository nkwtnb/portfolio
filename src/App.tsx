import './App.css';
import Header from "./components/Header";
import About from "./components/sections/About";
import Products from "./components/sections/Products";
import Contact from "./components/sections/Contact";
import Spacer from './components/Spacer';
import HeaderLabel from './components/HeaderLabel';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Spacer inline={false} axis='y' value={72} />
      <HeaderLabel text="About" id="about" />
      <About />
      <HeaderLabel text="Products" id="products"/>
      <Products />
      <HeaderLabel text="Contact" id="contact"/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
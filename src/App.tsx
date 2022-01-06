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
      <HeaderLabel text="About" />
      <About />
      <HeaderLabel text="Products" />
      <Products />
      <HeaderLabel text="Contact" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
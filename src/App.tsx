import './App.css';
import Header from "./components/Header";
import About from "./components/sections/About";
import Products from "./components/sections/Products";
import Contact from "./components/sections/Contact";
import Spacer from './components/Spacer';

function App() {
  return (
    <>
      <Header />
      <Spacer inline={false} axis='y' value={72} />
      <About />
      <Products />
      <Contact />
    </>
  );
}

export default App;

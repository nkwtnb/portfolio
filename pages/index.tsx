import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Index.module.css';
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import HeaderLabel from "../src/components/HeaderLabel";
import About from "../src/components/sections/About";
import Contact from "../src/components/sections/Contact";
import Products from "../src/components/sections/Products";
import Spacer from "../src/components/Spacer";
import reportWebVitals from '../src/reportWebVitals';

export default function Index() {
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

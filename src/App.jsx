import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Section from "./components/Section";
import { useState, useEffect } from "react";

function App() {
  const [loading, isLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        isLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <Section loading={loading} products={products} />
      <Footer />
    </>
  );
}

export default App;

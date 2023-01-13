import "../styles/globals.css";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

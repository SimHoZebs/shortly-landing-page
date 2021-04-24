import Navbar from "../layout/Navbar";
import Hero from "../layout/Hero";
import Cta from "../layout/Cta";
import Desc from "../layout/Desc";
import BottomCta from "../layout/BottomCta";

import style from "../styles/css/footer.module.css";
import { Button, Typography } from "@material-ui/core";

import indexData from "../components/indexData";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Cta />

      <Desc />

      <BottomCta />

      <Footer />
    </>
  );
}

import React from "react";
import Banner from "../../components/about/banner/Banner";
import ZikzakSec from "../../components/about/zik-zak-sec/Zikzak";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";


function AboutPage() {
  return (
    <>
      <Header />
        <Banner />
        <ZikzakSec />
      <Footer />
    </>

  );
}
export default AboutPage;
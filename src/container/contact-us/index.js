import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/contact-page/banner/BannerCon";
import ConForm from "../../components/contact-page/form/ContactForm";


function ContactUS () {
    return (
        <>
        
       <Header />
          <Banner /> 
          <ConForm />
       <Footer />
       </>
    );
}export default ContactUS;

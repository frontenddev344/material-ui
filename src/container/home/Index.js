import React from "react";
import { HomeWrapper } from "./style";
import Header from "../../components/header/Header";
import Banner  from '../../components/banner/Banner.js';
import WelcomSec from '../../components/welcom-section/WelcomSec';
import BestPlace from '../../components/best--places/BestPlace';
import Footer from '../../components/footer/Footer';

function HomePage() {
    return (
        <HomeWrapper>
            <Header />
                <Banner />
                <WelcomSec />
                <BestPlace />
            <Footer />
        </HomeWrapper>
    );
}
export default HomePage;
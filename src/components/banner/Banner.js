import React from "react";
import { Box, Typography } from "@material-ui/core";
import BG from '../../assests/hero_4.jpg';
import { BannerWrapper } from "./style";



function Banner() {
    return (
        <BannerWrapper >
            <Box component="section" className="bannerMain">
                <Box className="imgBar">
                    <img src={BG} alt="img" />
                </Box>


                <div className="bannerHeading" >
                    <Typography variant="h5">ΚΑΛΩΣΗΡΘΕΣ ΣΤΟ</Typography>
                    <Box className="text-effect">
                        <Typography variant="h1">Otoixnua</Typography>
                        <Typography variant="h1">Otoixnua</Typography>
                    </Box>

                </div >

            </Box>
        </BannerWrapper>
    );
}


export default Banner;
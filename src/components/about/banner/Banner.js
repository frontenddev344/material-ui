import React from "react";
import { BannerAboutWrapper } from "./style";
import { Box, Typography } from '@material-ui/core';

function BannerAbout() {
    return (

        <BannerAboutWrapper>
           <Box component="section" className="banner_sec" >
               <Box className="text-effect bnner-wrapper" xs={{ height: '100%' }} >
                  <Typography variant="h1">Σχετικά με εμάς</Typography>
                  <Typography variant="h1">Σχετικά με εμάς</Typography>
               </Box>
           </Box>
        </BannerAboutWrapper>

    );
}

export default BannerAbout;
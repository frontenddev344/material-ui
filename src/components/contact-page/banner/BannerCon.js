import React from "react";
import { Box, Typography } from '@material-ui/core';
import { ConatactWrapper } from "./style";


function BannerCon() {
    return (
       
            <ConatactWrapper>
                <Box component="section" className="banner_bar">
                    <Box className="text-effect bnner-wrapper" xs={{ height: '100%' }} >
                        <Typography variant="h1">Επικοινωνία</Typography>
                        <Typography variant="h1">Επικοινωνία</Typography>
                    </Box>
                </Box>
            </ConatactWrapper>
      
    );
}
export default BannerCon;





import React from "react";
import { Box, Typography, Container } from "@material-ui/core";
import { WelcWrapper } from "./style";
import BIMG from '../../assests/bannerr.jpg'

function WelcomSec() {
    return (
        <WelcWrapper>
            <Box component="section" >
                <Container>
                    <Box className="box-wrapper">
                    <div className="left-side">
                        <Box>
                            <Typography variant="h3">
                                Καλώς Ήρθατε Στο Otoixnua.Com
                            </Typography>
                            <Typography variant="subtitel">
                                τον απόλυτο προορισμό για όλες τις ανάγκες σύγκρισης σας τα
                                 ξενοδοχεία και τα καζίνο σας! Εάν είστε άπληστος τζογαδόρος 
                                 ή αναζητητής αναψυχής που αναζητώντας την τέλεια απόδραση στη 
                                 μαγευτική γη της Ελλάδας, ήρθατε στο σωστό μέρος.
                            </Typography>
                        </Box>
                    </div>
                    <div className="right-side">
                        <Box >
                            <img src={BIMG} alt="img" />
                        </Box>
                    </div>
                    </Box>
                </Container>
            </Box>
        </WelcWrapper>
    );
} export default WelcomSec;
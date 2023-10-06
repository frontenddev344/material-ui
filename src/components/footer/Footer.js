import React from "react";
import { Box, Typography, Container, Grid } from '@material-ui/core';
import { FooterWrapper } from "./style";
import logo from "../../assests/whlogo.png";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import insta1 from "../../assests/banner1.jpg";
import insta2 from "../../assests/banner2.jpg";
import insta3 from "../../assests/banner3.jpg";
import insta4 from "../../assests/Bannercasino.jpg";



function Footer() {
    return (
        <>
            <FooterWrapper>
                <footer>
                    <Container>
                        <Box className="grid grid-cols-4 gap-4 relative z-50">
                            <div>
                                <Box>
                                    <Typography variant="h5">ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ <AcUnitIcon /> </Typography>
                                </Box>
                                <Box className="py-8 logo-img">
                                    <img src={logo} />
                                </Box>
                                <Box className="socialwrapper">
                                    <Box className="socialIcon">
                                        <InstagramIcon />
                                    </Box>
                                    <Box className="socialIcon">
                                        <TwitterIcon />
                                    </Box>
                                    <Box className="socialIcon">
                                        <LinkedInIcon />
                                    </Box>
                                </Box>
                            </div>
                            <div>
                                <Box className="menu-bar">
                                    <Typography variant="h5">ΜΕΝΟΎ</Typography>
                                    <List >
                                        <ListItem disablePadding>
                                            <ListItemText primary="Σπίτι" />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText primary="Καζίνο Regency" />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText primary="Club Hotel Casino Loutraki" />
                                        </ListItem>
                                    </List>
                                </Box>
                            </div>
                            <div>
                                <Box className="menu-bar">
                                <Typography variant="h5">ΑΣΦΆΛΕΙΑ ΙΣΤΟΣΕΛΊΔΑΣ </Typography>
                                    <List >
                                        <ListItem disablePadding>
                                            <ListItemText primary="Πολιτική απορρήτου" />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemText primary="Οροι και Προϋποθέσεις" />
                                        </ListItem>
                                    </List>
                                </Box>
                            </div>
                            <div>
                                <Box>
                                    <Typography variant="h5">ΊΝΣΤΑΓΚΡΑΜ</Typography>
                                </Box>
                                <List className="insta-gallary">
                                        <ListItem disablePadding>
                                            <img src={insta1} alt="instagram img" />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <img src={insta2} alt="instagram img" />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <img src={insta3} alt="instagram img" />
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <img src={insta4} alt="instagram img" />
                                        </ListItem>
                                    </List>
                            </div>
                        </Box>
                    </Container>
                </footer>
            </FooterWrapper>
        </>
    );
} export default Footer;
import React from "react";
import { Box, Container } from '@material-ui/core';
import { HeaderWrapper } from "./style";
import IMG from '../../assests/logo.png';
import { NavLink } from "react-router-dom";



function Header() {
   return (
      <HeaderWrapper>
         <Box>
            <Container>
               <Box className="headerWrapper" >
                  <Box className="logoBar">
                     <img src={IMG} alt="img" />
                  </Box>
                  <Box className="headernav">
                     <ul >
                        <li>
                           <NavLink to="/">home</NavLink>
                        </li>
                        <li>
                           <NavLink to="/about">about us</NavLink>
                        </li>
                        <li>
                           <NavLink to="/contact">contact</NavLink>
                        </li>
                     </ul>
                  </Box>
               </Box>
            </Container>
         </Box>
      </HeaderWrapper>
   );
}

export default Header;
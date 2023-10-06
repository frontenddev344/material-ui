import styled from "styled-components";
export const HeaderWrapper = styled.header`

position: relative;
   .headerWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    .logoBar {
        width: 200px !important;
        img {
            width: 100%;   
        } 
    }
    .headernav ul {
        display: flex;
        align-items: center; 
        list-style: none;
         
  
            li {
                font-size: 20px;
                text-transform: capitalize;
                padding: 0 20px;
                
            }
    }
   }
`;
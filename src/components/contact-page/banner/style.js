import styled from "styled-components";
import  Contactbanner  from "../../../assests/banner2.jpg";
export const ConatactWrapper = styled.div`


.banner_bar {

    background-image: url(${Contactbanner});
    background-size: cover;
    width: 100%;
    height: 350px;
    background-attachment: fixed;
    position: relative;

    &::after {
        position: absolute;
        inset: 0;
        background-color: rgb(0 0 0 / 78%);
        content: "";
    }
    .bnner-wrapper{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 99;
         h1 {
            font-size: 42px;
            color: #ffffff;
            font-weight: 600;
            text-transform: capitalize;
        }
    }

}

`
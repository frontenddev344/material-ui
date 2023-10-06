import styled from "styled-components";
import BG from '../../assests/pool_01.jpg'
export const FooterWrapper = styled.footer`

footer {
    padding:100px 0;
    background-image: url(${BG});
    background-size: cover;
    width: 100%;
    height: 350px;
    position: relative;
    &::after {
        position: absolute;
        inset: 0;
        background-color: rgb(0 0 0 / 95%);
        content: "";

    }
    .MuiTypography-h5 {
        font-size: 16px;
        color: #ffce5d;
        text-transform: uppercase;
    }
    .logo-img img {
        width: 200px;
    }
    .socialwrapper {
        display: flex;
        gap: 15px;
        .socialIcon svg {

            width: 55px;
            height: 55px;
            color: #fff;
            padding: 13px;
            border-radius: 50px;
            background: #ffb302;
            box-shadow: 0px 0px 8px 1px #ffb302;
            transition: .4s;
            cursor: pointer;

            &:hover {
                background: #fff; 
                color: #ffb302;
            }
        }
    }
    .menu-bar  {

            li  {
                padding: 8px 0;

                span {
                    color: white;
                    font-family: "Roboto", "Helvetica", "Arial", sans-serif !important;
                    cursor: pointer;
                    transition: .4s;
             }
             &:hover span{
                color: #ffb302;
             }
        }
    }
    .insta-gallary {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        width: 250px;
        li {
            border-radius: 10px;
            overflow: hidden;
            img {
                transition: .5s;
                height: 70px;
                
            }

            &:hover img {
                transform: scale(1.5);
                transition: .5s;
            }
        }
    }
}

`
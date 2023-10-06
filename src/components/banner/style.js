import styled from "styled-components";
export const BannerWrapper = styled.div`


.bannerMain {
    position: relative;
    img {
        width: 100%;
        height: 85vh;
        object-fit: cover;
    }
    &:after {
        position: absolute;
        content: "";
        inset: 0;
        background-color: #00000073;

    }
    .bannerHeading {
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
        z-index: 9;
        text-align: center;
        
        h5 {
            color: #fff;
            font-size: 22px;
        }
        h1{
            font-size: 72px;
            color: #ffce5d;
            font-weight: 500;
            text-transform: capitalize;
            letter-spacing: 3px;
        }
    }

}

`;
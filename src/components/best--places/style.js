import styled from "styled-components";
import BG from '../../assests/bannerr.jpg';
export const BestWrapper = styled.div`

.bestmain {
    background-image: url(${BG});
    background-size: cover;
    width: 100%;
    height: 350px;
    background-attachment: fixed;
    position: relative;

    &::after {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.45);
        content: "";

    }
    span {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #fff;
        position: relative;
        z-index: 9;
        font-size: 20px;
        line-height: 33px;
    }
}


`
import styled from "styled-components";

export const WelcWrapper = styled.div`

section {
    padding: 125px 0;

    .box-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 50px;
    
        .right-side img {
          height: 420px;
          object-fit: cover;
        }
        span.MuiTypography-root {
            font-size: 20px;
            font-weight: 500;
        }
        h3 {
            color: #ffb302;
            text-transform: capitalize;
            font-size: 34px;
            margin-bottom: 20px;
            font-weight: 500;
        }
    }
}

`
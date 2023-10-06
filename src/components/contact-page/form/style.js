import styled from "styled-components";

export const FormWrapper  = styled.div`

.formMain {
    padding: 100px 0;

    .forminner {
        width: 100%;
        max-width: 650px;
        margin: 0 auto;
        form {
            input, textarea {
                width: 100%;
                border: 1px solid rgb(201 201 201);
                padding: 15px;
                border-radius: 7px;
                font-size: 15px;
                margin-bottom: 35px;
            }
            textarea  {
                height: 150px;
            }
        }
    }
}

`
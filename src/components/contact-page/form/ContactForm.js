import React from "react";
import { Box, Container } from "@material-ui/core"


import { FormWrapper } from "./style";

function ConForm() {
    return (
        <FormWrapper>
            <Box component="section" className="formMain">
                <Container>
                    <Box className="forminner">
                    <form >
                    <input placeholder="Full Name" type="text" />
                    <input placeholder="Last Name" type="text" />
                    <input placeholder="Phone Number" type="number" />
                    <textarea placeholder="Comment here"  />

                </form>
                    </Box>
                
                </Container>
            </Box>
        </FormWrapper>
    );
}
export default ConForm;
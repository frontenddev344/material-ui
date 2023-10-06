import React from "react";
import { Box, Typography, Container } from '@material-ui/core';
import { BestWrapper } from "./style";



function BestPlace() {
    return (
        <>
        <BestWrapper>
          <Box component="section" className="bestmain" >
             <Container>
                <Typography variant="p" >
                Κατανοούμε ότι η επιλογή του ιδανικού καζίνο ξενοδοχείου μπορεί να είναι μια πρόκληση, 
                με τόσες πολλές προσφορές στα γραφικά ελληνικά νησιά και τις ζωντανές πόλεις.
                    Γιατί; Αυτός είναι ο λόγος που δημιουργήσαμε το otoixnua.com,
                    μια ολοκληρωμένη πλατφόρμα που έχει σχεδιαστεί για να κάνετε τη 
                    διαδικασία λήψης αποφάσεων σας αβίαστη και ευχάριστη.
                </Typography>
             </Container>
          </Box>
          </BestWrapper>
        </>
    );
} export default BestPlace;









import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { ZikzakStyle } from "./style";
import RgtIMG from "../../../assests/bannerr.jpg"; // Corrected import statement

function Item(props) {
  return <div>{props.children}</div>;
}

function ZikzakSec() {
  return (
    <ZikzakStyle>
      <Box component="section" className="zikWrapper">
        <Grid container spacing={4}>
          <Grid item xs={6} className="left-cont">
            <Item >
              <Typography >
              Η Ελλάδα, γνωστή για την πλούσια ιστορία της, τη μαγευτική κουλτούρα της και 
              τα μαγευτικά τοπία της, διαθέτει επίσης μια ζωντανή και συναρπαστική σκηνή καζίνο. 
              Από τα εκθαμβωτικά φώτα της Αθήνας μέχρι τις ηλιόλουστες ακτές της Σαντορίνης,
               ο ιστότοπός μας σας παρέχει μια εκτενή βάση δεδομένων με κορυφαία ξενοδοχεία και
                καζίνο στην Ελλάδα. Είτε αναζητάτε ένα πολυτελές θέρετρο με ένα καζίνο παγκόσμιας
                 κλάσης είτε ένα άνετο boutique ξενοδοχείο με γοητευτικές εγκαταστάσεις τυχερών 
                 παιχνιδιών, σας έχουμε καλύψει.
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6} className="right-img">
            <Item>
              <img src={RgtIMG} alt="img" />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </ZikzakStyle>
  );
}

export default ZikzakSec;

import { Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import SectionContainer from "../../components/SectionContainer";
import content from "../../content/pricing";
import Card from "./Card";
import SwitchBtn from "./SwitchBtn";

const Pricing = () => {
  const theme = useTheme();
  const [checked, setChecked] = React.useState(false);

  const handleCheck = (event) => {
    setChecked(!checked);
  };
  return (
    <SectionContainer title={"Nos tarifs"} id={"sectionTarifs"} sx={{mt:10}}>
      <Container maxWidth="lg">
        <SwitchBtn checked={checked} handleCheck={handleCheck} />
        <Grid container spacing={2}>
          {content.map((elem,k) => (
            <Grid key={k} item lg={3} md={4} sm={6} xs={12}>
              <Card
                checked={checked}
                title={elem.title}
                description={elem.description}
                pricing={elem.pricing}
                extendedPricing={elem.extendedPricing}
                extendedDesc={elem.extendedDesc}
                features={elem.features}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionContainer>
  );
};

export default Pricing;

import React, { Component } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const koraci = ["Prvi korak", "Drugi korak", "Treci korak"];

export class DrugiKorak extends Component {
  handleNext = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  handleBack = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={1} alternativeLabel>
            {koraci.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box sx={{ width: "30%", margin: "2rem auto", display: "flex", flexDirection: "column" }}>
          <TextField
            id="standard-basic"
            label="Grad"
            variant="standard"
            required
            onChange={handleChange("grad")}
            value={values.grad}
          />
          <TextField
            id="standard-basic"
            label="Zanimanje"
            variant="standard"
            required
            onChange={handleChange("zanimanje")}
            value={values.zanimanje}
          />
          <TextField
            id="standard-basic"
            label="Godina"
            variant="standard"
            required
            onChange={handleChange("godina")}
            value={values.godina}
          />
        </Box>
        <Box sx={{ width: "10%", margin: "0 auto", display: "flex", gap: "3rem" }}>
          <Button variant="contained" onClick={this.handleBack}>
            Nazad
          </Button>
          <Button variant="contained" onClick={this.handleNext}>
            Dalje
          </Button>
        </Box>
      </>
    );
  }
}

export default DrugiKorak;

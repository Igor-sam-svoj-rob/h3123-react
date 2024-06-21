import React, { Component } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const koraci = ["Prvi korak", "Drugi korak", "Treći korak"];

export class PrviKorak extends Component {
  handleNext = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={0} alternativeLabel>
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
            label="Ime"
            variant="standard"
            required
            onChange={handleChange("ime")}
            defaultValue={values.ime}
          />
          <TextField
            id="standard-basic"
            label="Prezime"
            variant="standard"
            required
            onChange={handleChange("prezime")}
            defaultValue={values.prezime}
          />
          <TextField
            id="standard-basic"
            label="E-mail"
            variant="standard"
            required
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
        </Box>
        <Box sx={{ width: "10%", margin: "0 auto" }}>
          <Button variant="contained" onClick={this.handleNext}>
            Dalje
          </Button>
        </Box>
      </>
    );
  }
}

export default PrviKorak;

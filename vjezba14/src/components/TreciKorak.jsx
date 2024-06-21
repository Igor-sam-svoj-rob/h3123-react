import React, { Component } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const koraci = ["Prvi korak", "Drugi korak", "Treci korak"];

export class TreciKorak extends Component {
  handleNext = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  handleBack = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values } = this.props;
    return (
      <>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={2} alternativeLabel>
            {koraci.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Box sx={{ width: "30%", margin: "2rem auto", display: "flex", flexDirection: "column" }}>
          <List>
            <ListItem>
              <ListItemText primary="ime" secondary={values.ime} />
            </ListItem>
            <ListItem>
              <ListItemText primary="prezime" secondary={values.prezime} />
            </ListItem>
            <ListItem>
              <ListItemText primary="email" secondary={values.email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="grad" secondary={values.grad} />
            </ListItem>
            <ListItem>
              <ListItemText primary="zanimanje" secondary={values.zanimanje} />
            </ListItem>
            <ListItem>
              <ListItemText primary="godina" secondary={values.godina} />
            </ListItem>
          </List>
        </Box>
        <Box sx={{ width: "10%", margin: "0 auto", display: "flex", gap: "3rem" }}>
          <Button variant="contained" onClick={this.handleBack}>
            Nazad
          </Button>
          <Button variant="contained" onClick={this.handleNext}>
            Potvrdi
          </Button>
        </Box>
      </>
    );
  }
}

export default TreciKorak;

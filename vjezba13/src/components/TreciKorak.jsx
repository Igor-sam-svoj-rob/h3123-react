import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const koraci = ["Prvi korak", "Drugi korak", "Treci korak"];

const TreciKorak = ({ page, setPage, data }) => {
  const handleNext = () => {
    setPage(page + 1);
  };

  const handleBack = () => {
    setPage(page - 1);
  };

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
            <ListItemText primary="ime" secondary={data.ime} />
          </ListItem>
          <ListItem>
            <ListItemText primary="prezime" secondary={data.prezime} />
          </ListItem>
          <ListItem>
            <ListItemText primary="email" secondary={data.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="grad" secondary={data.grad} />
          </ListItem>
          <ListItem>
            <ListItemText primary="zanimanje" secondary={data.zanimanje} />
          </ListItem>
          <ListItem>
            <ListItemText primary="godina" secondary={data.godina} />
          </ListItem>
        </List>
      </Box>
      <Box sx={{ width: "10%", margin: "0 auto", display: "flex", gap: "3rem" }}>
        <Button variant="contained" onClick={handleBack}>
          Nazad
        </Button>
        <Button variant="contained" onClick={handleNext}>
          Potvrdi
        </Button>
      </Box>
    </>
  );
};

export default TreciKorak;

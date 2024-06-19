import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const koraci = ["Prvi korak", "Drugi korak", "Treci korak"];

const DrugiKorak = ({ page, setPage, data, setData }) => {
  const isValid = () => {
    const { grad, zanimanje, godina } = data;
    return grad.trim() !== "" && zanimanje.trim() !== "" && godina.trim() !== "";
  };

  const handleNext = () => {
    if (isValid()) {
      setPage(page + 1);
    } else {
      alert("Molimo Vas ispunite polja...");
    }
  };

  const handleBack = () => {
    setPage(page - 1);
  };

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
          onChange={(event) => setData({ ...data, grad: event.target.value })}
          value={data.grad}
        />
        <TextField
          id="standard-basic"
          label="Zanimanje"
          variant="standard"
          required
          onChange={(event) => setData({ ...data, zanimanje: event.target.value })}
          value={data.zanimanje}
        />
        <TextField
          id="standard-basic"
          label="Godina"
          variant="standard"
          required
          onChange={(event) => setData({ ...data, godina: event.target.value })}
          value={data.godina}
        />
      </Box>
      <Box sx={{ width: "10%", margin: "0 auto", display: "flex", gap: "3rem" }}>
        <Button variant="contained" onClick={handleBack}>
          Nazad
        </Button>
        <Button variant="contained" onClick={handleNext}>
          Dalje
        </Button>
      </Box>
    </>
  );
};

export default DrugiKorak;

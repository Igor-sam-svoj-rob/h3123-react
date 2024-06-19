import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const koraci = ["Prvi korak", "Drugi korak", "Treći korak"];

const PrviKorak = ({ page, setPage, data, setData }) => {
  const isValid = () => {
    const { ime, prezime, email } = data;
    return ime.trim() !== "" && prezime.trim() !== "" && email.trim() !== "";
  };

  const handleNext = () => {
    if (isValid()) {
      setPage(page + 1);
    } else {
      alert("Molimo Vas ispunite polja...");
    }
  };
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
          onChange={(event) => setData({ ...data, ime: event.target.value })}
          value={data.ime}
        />
        <TextField
          id="standard-basic"
          label="Prezime"
          variant="standard"
          required
          onChange={(event) => setData({ ...data, prezime: event.target.value })}
          value={data.prezime}
        />
        <TextField
          id="standard-basic"
          label="E-mail"
          variant="standard"
          required
          onChange={(event) => setData({ ...data, email: event.target.value })}
          value={data.email}
        />
      </Box>
      <Box sx={{ width: "10%", margin: "0 auto" }}>
        <Button variant="contained" onClick={handleNext}>
          Dalje
        </Button>
      </Box>
    </>
  );
};

export default PrviKorak;

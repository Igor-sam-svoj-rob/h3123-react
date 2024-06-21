import React, { Component } from "react";
import PrviKorak from "./components/PrviKorak";
import DrugiKorak from "./components/DrugiKorak";
import TreciKorak from "./components/TreciKorak";
import CetvrtiKorak from "./components/CetvrtiKorak";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      ime: "",
      prezime: "",
      email: "",
      grad: "",
      zanimanje: "",
      godina: "",
    };
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (event) => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step, ime, prezime, email, grad, zanimanje, godina } = this.state;
    const values = { ime, prezime, email, grad, zanimanje, godina };

    switch (step) {
      case 1:
        return (
          <PrviKorak nextStep={this.nextStep} values={values} handleChange={this.handleChange} />
        );
      case 2:
        return (
          <DrugiKorak
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return (
          <TreciKorak
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            handleChange={this.handleChange}
          />
        );
      case 4:
        return <CetvrtiKorak />;
    }
    return <div></div>;
  }
}

export default App;

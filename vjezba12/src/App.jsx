import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const App = () => {
  const initalValues = { user: "", email: "", pass: "" };
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState(initalValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (v) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!v.user) {
      errors.user = "Ovo polje ne može ostati prazno";
    }
    if (!v.email) {
      errors.email = "Ovo polje ne može ostati prazno";
    } else if (!regex.test(v.email)) {
      errors.email = "Niste unijeli ispravnu e-mail adresu";
    }
    if (!v.pass) {
      errors.pass = "Ovo polje ne može ostati prazno";
    } else if (v.pass.length < 6) {
      errors.pass = "Lozinka mora imati više od 6 znakova";
    }
    return errors;
  };

  return (
    <div className="container">
      <form ref={form} onSubmit={handleSubmit}>
        <h1>Forma</h1>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <p className="ispis">Uspjeh</p>
        ) : (
          <p className="ispis">Ispunite formu</p>
        )}
        <hr />
        <div className="form">
          <div className="field">
            <label htmlFor="user">Username</label>
            <input
              type="text"
              name="user"
              placeholder="Username"
              value={formValues.user}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.user}</p>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="pass"
              placeholder="Password"
              value={formValues.pass}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.pass}</p>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;

import Card from "../shared/Card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Card>
      <div className="about">
        <h1>Lorem ipsum</h1>
      </div>
      <Link to="/">Nazad</Link>
    </Card>
  );
};

export default About;

import HelloFn from "./components/HelloFn";
import HelloCl from "./components/HelloCl";

const App = () => {
  return (
    <div>
      <HelloFn ime="Igor" prezime="Jevremović">
        Učimo React. Ovo su Props childreni.
      </HelloFn>
      <HelloCl ime="Ivan" prezime="Ivić">
        Učimo React. Ovo su Props childreni.
      </HelloCl>
    </div>
  );
};

export default App;

import HelloFn from "./components/HelloFn";
import HelloCl from "./components/HelloCl";
import Message from "./components/Message";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <HelloFn ime="Igor" prezime="Jevremović">
        Učimo React. Ovo su Props childreni.
      </HelloFn>
      <HelloCl ime="Ivan" prezime="Ivić">
        Učimo React. Ovo su Props childreni.
      </HelloCl>
      <Message />
      <hr />
      <br />
      <Counter />
    </div>
  );
};

export default App;

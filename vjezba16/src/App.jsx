import UserStore from "./store/store";
import Ispis from "./components/Ispis";

const App = () => {
  const store = new UserStore();
  return <Ispis store={store} />;
};

export default App;

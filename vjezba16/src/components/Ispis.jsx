import { observer } from "mobx-react-lite";

const Ispis = ({ store }) => {
  return (
    <div>
      <h1>MOBX</h1>
      <p>
        {store.userInfo.id} - {store.userInfo.ime}
      </p>
    </div>
  );
};

export default observer(Ispis);

import StiliziranaKartica from "./StiliziranaKartica";
import { useContext } from "react";
import Context from "../../context/Context";

const ListaKartica = () => {
  const { kartica } = useContext(Context);

  if (!kartica || kartica.length === 0) {
    return <p>Nema sadržaja</p>;
  }
  return (
    <div className="lista-kartica">
      {kartica.map((item) => (
        <StiliziranaKartica item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ListaKartica;

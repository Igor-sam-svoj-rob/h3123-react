import StiliziranaKartica from "./StiliziranaKartica";

const ListaKartica = ({ kartica, handleDelete }) => {
  if (!kartica || kartica.length === 0) {
    return <p>Nema sadržaja</p>;
  }
  return (
    <div className="lista-kartica">
      {kartica.map((item) => (
        <StiliziranaKartica item={item} key={item.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ListaKartica;

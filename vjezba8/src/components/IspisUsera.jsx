import { useEffect } from "react";

const IspisUsera = () => {
  const fetchUsers = async () => {
    const res = await fetch("https://api.github.com/users");
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <div>IspisUsera</div>;
};

export default IspisUsera;

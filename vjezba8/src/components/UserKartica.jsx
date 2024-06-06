import { Link } from "react-router-dom";

const UserKartica = ({ user }) => {
  return (
    <div className="shadow-md bg-slate-100 text-center">
      <div className="flex items-center space-x-4">
        <div>
          <img
            src={user.avatar_url}
            alt={user.login}
            className="inline-block h-24 w-24 rounded-full ring-2 ring-white"
          />
        </div>
        <div>
          <h2 className="uppercase py-2">{user.login}</h2>
          <Link to={`/user/${user.login}`} className="underline inline-block py-2">
            Pogledaj profil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserKartica;

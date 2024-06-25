import { observer } from "mobx-react-lite";
import { FaEdit, FaSave, FaWindowClose } from "react-icons/fa";

const PrikazIspisa = ({ user, store }) => {
  const startEditing = () => {
    store.runInAction(() => {
      store.setEditedUserId(user.id);
      store.newName = user.ime;
      store.newHobi = user.hobiji.join(", ");
    });
  };

  const stopEditing = () => {
    store.runInAction(() => {
      store.stopEdit();
    });
  };

  const onChangeName = (e) => {
    store.runInAction(() => {
      store.newName = e.target.value;
    });
  };

  const onChangeHobi = (e) => {
    store.runInAction(() => {
      store.newHobi = e.target.value;
    });
  };

  const saveChanges = () => {
    store.updateUser(user.id, store.newName);

    const newHobbies = store.newHobi
      .split(",")
      .map((hobi) => hobi.trim())
      .filter(Boolean);
    store.addHobi(user.id, newHobbies);

    stopEditing();
  };

  return (
    <div key={user.id}>
      <div>
        {store.editedUserId === user.id ? (
          <>
            <input type="text" value={store.newName} onChange={onChangeName} />
            <input type="text" value={store.newHobi} onChange={onChangeHobi} />

            <button onClick={saveChanges}>
              <FaSave />
            </button>
            <button onClick={stopEditing}>
              <FaWindowClose />
            </button>
          </>
        ) : (
          <>
            <p>
              {user.ime} - {user.id}
            </p>
            <button onClick={startEditing}>
              <FaEdit />
            </button>
          </>
        )}
      </div>

      {user.hobiji.map((hobi, index) => (
        <p key={index}>{hobi}</p>
      ))}
    </div>
  );
};

export default observer(PrikazIspisa);

import { action, makeObservable, observable } from "mobx";

class UserStore {
  userInfo = {
    id: "1",
    ime: "Igor",
    hobiji: ["pecanje", "stolni tenis"],
  };

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      updateUser: action,
      addHobi: action,
    });
  }
}

export default UserStore;

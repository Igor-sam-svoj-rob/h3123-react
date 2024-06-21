import { v4 as uuidv4 } from "uuid";
import { observable, makeObservable, action } from "mobx";

class TodoStore {
  lista = [];

  constructor() {
    makeObservable(this, {
      lista: observable,
      dodaj: action,
    });
  }

  dodaj = (inputText) => {
    const todoZadatak = {
      id: uuidv4(),
      text: inputText,
    };
    this.lista.push(todoZadatak);
  };
}

export default TodoStore;

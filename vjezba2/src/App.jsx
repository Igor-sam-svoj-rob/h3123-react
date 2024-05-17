import React, { Component } from "react";
import ListaKartica from "./components/ListaKartica";
import SearchPolje from "./components/SearchPolje";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      osobe: [],
      searchPolje: "",
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users").then((res) =>
      res.json().then((data) =>
        this.setState(
          () => {
            return { osobe: data.data };
          },
          () => {
            console.log(this.state);
          }
        )
      )
    );
  }

  onFilterChange = (event) => {
    const searchPolje = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchPolje };
    });
  };

  render() {
    const { osobe, searchPolje } = this.state;
    const { onFilterChange } = this;
    const filter = osobe.filter((osoba) => {
      return osoba.first_name.toLowerCase().includes(searchPolje);
    });

    return (
      <div className="app">
        <SearchPolje onFilterChange={onFilterChange} />
        <ListaKartica osobe={filter} />
      </div>
    );
  }
}

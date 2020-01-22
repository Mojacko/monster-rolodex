import React, { Component } from "react";
import { CardList } from "./Components/card-list/card-list.component";
import { Searchbar } from "./Components/searchbar/seachbar.component";
import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchString: ""
        };
    }

    componentDidMount() {
        /* fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users})); */
        this.getMonsterData();
    }

    getMonsterData = async () => {
        try {
            const userData = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const userJson = await userData.json();
            this.setState({ monsters: userJson });
        } catch (err) {
            console.log("There was an error trying to make the request.");
        }
    };

    handleChange = e => {
        this.setState({ searchString: e.target.value });
    };

    render() {
        const { monsters, searchString } = this.state;

        const filteredMonster = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchString.toLowerCase())
        );
        return (
            <div className="App">
                <h1 className="title">Monster Rolodex</h1>
                <Searchbar
                    placeholder="Search Monster"
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonster} />
            </div>
        );
    }
}

export default App;

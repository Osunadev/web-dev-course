import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        // The state to manage our application, that describes our app.
        // This is something that can change change and affect our app.
        
        // The state usually lives in the parent component, the component
        // than just kind of passes state to different components
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    // We are not using arrow functions because this is part of React\
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({ robots: users })
        })
    }

    // We make a function/method so that we can pass it down to our
    // SearchBox and act like a Callback event function
    onSearchChange = (event) => {
        // We can modify the state directy by using this.state.searchfield
        // but  it will not lead to the Component re-rendering with new 
        // data, and generally lead to state inconsistency.
        this.setState({ searchfield: event.target.value });
    }

    // We use an arrow function like notation (class field experimental notation) for our onSearchChange listener
    // to not make a binding on the constructor. This would be that case:

    /* 
        constructor() {
            super();
            this.state = {
                robots: robots,
                searchfield: ''
            }

            this.onSearchChange = this.onSearchChange.bind(this);
        }

        onSearchChange(event) {
            this.setState({ searchfield: event.target.value });
        }
    */

    render() {
        const { robots, searchfield } = this.state; // We use destructuring to make te code more cleaner

        // Generating an array of filtered robots so that we can pass it down to CardList
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        // If the users are not loaded yet
        return !robots.length ? 
        <h1>Loading...</h1> :  
        (
            <div className='tc'>
                <h1>RoboFriends</h1> 
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;
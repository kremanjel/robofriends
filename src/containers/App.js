import React,  { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErroBoundry';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    onSearchChange = (event) => {
        this.setState( { searchfield: event.target.value } );
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        if (this.state.robots.length === 0)
        {
            return (
                <div className="tc">
                    <h1 className="f1">loading ...</h1>
                </div>
            );    
        }
        else
        {
            return (
                <div id="app" className="tc">
                    <header>
                        <h1 className="f1">Robofriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                    </header>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );    
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(robotlist => this.setState({ robots: robotlist}));
    }
}

export default App;
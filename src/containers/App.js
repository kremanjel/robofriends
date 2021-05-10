import React,  { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(robotlist => setRobots(robotlist));
    })

    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }
    
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (robots.length === 0)
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
                    <SearchBox searchChange={onSearchChange}/>
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

export default App;
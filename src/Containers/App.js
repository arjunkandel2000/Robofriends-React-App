import React, { Component } from "react";
// import { robots } from './robots.js';
import CardList from '../Components/CardList';
import SearchBox from "../Components/SearchBox.js";
import Scroll from '../Components/Scroll.js'
import './App.css'
class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchFields:''
        }
    }
    
onSearchChange =(event) =>
{
    this.setState({searchFields:event.target.value});
    // console.log(filterRobots);
    
}

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users=> {this.setState({robots:users})});
}

    render()
    {
        const {robots, searchFields} = this.state
        const filteredRobots=robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchFields.toLowerCase())
        })
        return !robots.length ?
             <h1>Loading</h1> :
            (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    <CardList robots={filteredRobots}/>
                    </Scroll>
                </div> 
            );
    }
};

export default App;
import React, { Component } from 'react'
import data from '../data.js'
import List from './List.js';

export default class Accordion extends Component {

  state = {
    currentIndex: -1,
    lastOpen: -2
  };

  handleChange = (i, lastOpened) => {
    this.setState({
      lastOpen: lastOpened,
      currentIndex: i
    });
    // {console.log(this.state)}
  };

  render() {

    const {handleChange} = this;
    const {currentIndex, lastOpen} = this.state;

    return (
      <div className="accordian">
        {data.map(function(d, i){
          const {title, content} = d;
          return <List 
            title={title}
            content={content}
            handleChange={handleChange}
            key={i}
            index={i}
            currentIndex={currentIndex} //Store the current opened panel's index
            lastOpen={lastOpen} //Store the last opened panel's index
          />;
        })}
      </div>
    );
  }
}

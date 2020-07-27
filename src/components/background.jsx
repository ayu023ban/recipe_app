import React, { Component } from 'react'
import background from "../assets/images/background.jpg"
const divStyle = {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    position:"absolute",
    zIndex:"-2",
    overflow:"scroll"
  };
class Background extends Component{
    render(){
        return(
            <div style={divStyle}></div>
        )
    }
}
export default Background
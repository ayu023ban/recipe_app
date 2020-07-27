import React , { Component } from "react"
import loading_image from "../assets/images/Ball-1s-200px.gif"
import {Image} from "semantic-ui-react"
export default class Loading extends Component{
render(){
    return(
        <div>
            <Image src={loading_image}/>
        </div>
    )
}
}


import { Component } from "react"
import "./styles.css"
import InlineStyles from "./inline-style"




class ExternalStyles extends Component{

    render(){
        return(
            <>
            <h4 className={"greeting"}>Good morning</h4>
            <InlineStyles/>
            </>
        )
    }
}

export default ExternalStyles
import React, { Component } from "react"

class Box extends Component {

    state={
        Touch1:"changed",
        isTouched:false,
        Touch2:"changes occurs"
    }

    handleTouch=()=>{
        this.setState(
            {
                isTouched:!this.state.isTouched
            },()=>{
                console.log(this.state.isTouched)
            }
        )
        
    }

    



    render(){
        return(
            
            <>
                <button onClick={this.handleTouch}>{this.state.isTouched?this.state.Touch2:this.state.Touch1}</button>

                {
                    this.state.isTouched
                    ?
                    <>
                    <h2 style={{color:"darkblue"}}>Color has been changed to dark</h2>
                    </>
                    :
                    <>
                    <h2 style={{color:"light blue"}}>color has been changed to light</h2>
                    </>


                }

            </>
        )
    }
}

export default Box
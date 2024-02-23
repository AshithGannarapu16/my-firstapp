
import React, { Component } from "react"
import { TodoList } from "../todo/todo-list"
import OrderedList from "../list/orderedlist/orderedlist"

class Buttoncomponent extends Component{

    state={
        subScribedText1:"Subscribe",
        isSubscribed:false,
        subScribedText2:"Subscribed thanks"
    }

    handleSubscribe =()=>{
        // alert("button clicked")
        this.setState(
            {
                
                isSubscribed:!this.state.isSubscribed

            },()=>{
                console.log(this.state.isSubscribed)

            }
        )
    }
    render(){
        return(
            <>
            <button onClick={this.handleSubscribe} >{this.state.isSubscribed?this.state.subScribedText2:this.state.subScribedText1}</button>


            {

                this.state.isSubscribed
                ?
                <>
                <h2>Thanks for subscribe,explore more</h2>
                <TodoList/>
                <OrderedList/>
                </>
                :
               <>
                <h2>please subscribe to access the app content</h2>
                </>
            }
            </>
        )
    }
}

export default Buttoncomponent


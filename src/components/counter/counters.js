

class Counters extends Component{

    constructor(){
        super()
        this.state={
            count:0
        }
    }

    handleIncrement=()=>{
        this.setState(
            {
               count:this.state.count+1 
            }
        )
    }

    render(){
        return(
            <>
            <h3>Counter</h3>
            <h3>{this.state.count}</h3>
            <ChildButton handleIncrementMethod={this.handleIncrement} />
            </>
        )
    }
}

export default Counters


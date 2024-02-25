






// class childButton extends Component{
//     render(){
//         return(
//             <>
//             <button></button>
//             </>
//         )
//     }
// }

// export default childButton

const ChildButton =({handleIncrementMethod})=>{
    return(
        <>
        <button onClick={handleIncrementMethod}>Increment by 1</button>
        </>
    )
}

export default ChildButton
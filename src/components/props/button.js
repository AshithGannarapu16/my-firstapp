



function Button ({children,width}){

    const obj ={
        text:"login"
    }
    return(
       
           <button style={{width:width}}>{children}</button> 
           
        
    )
}
export default Button
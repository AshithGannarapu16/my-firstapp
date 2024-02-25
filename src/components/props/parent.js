import Button from "./button"








const  ParentComponent =()=>{
    return(
        <>
        <h2>Hello</h2>
        <Button width={"10%"}>
            Login
        </Button>
        <Button width={"20%"}>
            Login
        </Button>
        <Button width={"30%"}>
            Login
        </Button>
        <Receiver>
            <h1>hello</h1>
            <h2>hello1</h2>

        </Receiver>
        </>
    )
}

export default ParentComponent

 export const Receiver =({children})=>{
    return(
        <>
        {children}

        </>
    )
}
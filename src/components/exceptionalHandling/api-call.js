

function ApiCall(){

    const fetchData =()=>{

        try{

        fetch("https://fakestoreapi.com/products")
        .then(response=>  response.json())
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
        }
        catch(err){ 
            console.log(err)
            alert("something went wrong")
        }

    }

    return(
        <>
        <h2>api call</h2>
        <button onClick={fetchData}>Click me to fetch data</button>
        </>
    )
}

export default  ApiCall



export const TodoList = () => {

    const details = {
        name: "Hedy Lamarr's Todos",
        imageURL: "https://i.imgur.com/yXOvdOSs.jpg",
        imageALT: "Hedy Lamarr",
        listItems: ["Invent new traffic lights", "Rehearse a movie scene", "Improve the spectrum technology"]

    }

    const { name, imageURL, imageALT, listItems } = details
    return (
        <>
            <h1>{name}</h1>
            <img
                src={imageURL}
                alt={imageALT}
                className="photo"

            />
            <ul>
                <li>{listItems[0]}</li>
                <li>{listItems[1]}</li>
                <li>{listItems[2]}</li>
            </ul>

            <button onClick={()=>{alert("clicked")}}>Click me</button>
        </>

    )
}


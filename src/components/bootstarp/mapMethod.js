import ProfileCard from "./card"



const MapMethod=()=>{


    const members=[
        {
          name:"Ashith",
          designation:"CEO",
          color:"red",
          salary:"1000k"
        },
        {
          name:"gannarapu",
          designation:"surname",
          color:"red",
          salary:"100k"
        },
        {
          name:"Neeraja",
          designation:"mother",
          color:"blue",
          salary:"10000k"
        },
        {
            name:"Ashith",
            designation:"CEO",
            color:"red",
            salary:"1000k"
          },
          {
            name:"gannarapu",
            designation:"surname",
            color:"red",
            salary:"100k"
          },
          {
            name:"Neeraja",
            designation:"mother",
            color:"blue",
            salary:"10000k"
          },
          {
            name:"Ashith",
            designation:"CEO",
            color:"red",
            salary:"1000k"
          },
          {
            name:"gannarapu",
            designation:"surname",
            color:"red",
            salary:"100k"
          },
          {
            name:"Neeraja",
            designation:"mother",
            color:"blue",
            salary:"10000k"
          }
      ]



    return(
        <>


        {members.map((details)=><ProfileCard profile={details}/>)}
         
        </>
    )
}

export default MapMethod

import ProfileCard, { ProfileCard1 } from "./card"

const BootstrapLayout= ()=>   {
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
    }
  ]
    return(
        <>
        <div className="container-fluid p-5 bg-primary text-white text-center">
  <h1>My first react bootstrap application</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>
  
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4">
      {/* <ProfileCard profile={members[0]} /> */}

      <ProfileCard1 profile={members[0]}/>
    </div>
    <div className="col-sm-4">
      {/* <ProfileCard  profile={members[1]} /> */}
    </div>
    <div className="col-sm-4">
      {/* <ProfileCard  profile={members[2]}/> */}
    </div>
  </div>
</div>
        </>
    )
}

export default BootstrapLayout


import { Component } from "react"
import reactImage from "./download.jpg"

const ProfileCard = (props) => {
  console.log(props)
  return (
    <>
      <div className="card" style={{ width: "30%" }}>
        <img className="card-img-top" src={reactImage} alt="Card image" style={{ width: "100%" }} />
        <div className="card-body">
          <h4 className="card-title" style={{ color: props.profile.color }}>{props.profile.name}</h4>
          <p className="card-text">{props.profile.designation}</p>
          <p className="card-text">{props.profile.salary}</p>
          <a href="#" className="btn btn-primary">See Profile</a>
        </div>
      </div>
    </>
  )

}
export default ProfileCard



export class ProfileCard1 extends Component {


  render() {
    console.log(this.props)
    return (
      <>
        <div className="card" style={{ width: "30%" }}>
          <img className="card-img-top" src={reactImage} alt="Card image" style={{ width: "100%" }} />
          <div className="card-body">
            <h4 className="card-title" style={{color:this.props.profile.color }}>{this.props.profile.name}</h4>
            <p className="card-text">{this.props.profile.designation}</p>
            <p className="card-text">{this.props.profile.salary}</p>
            <a href="#" className="btn btn-primary">See Profile</a>
          </div>
        </div>
      </>

    )
  }
}


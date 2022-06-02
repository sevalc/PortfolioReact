import "./about.css";

export default function About() {
  return (

    <div className="container-fluid">
      <div className="left">
        <img className= "photo" src="assets/profile_foto.jpg "></img>
      </div>
      <div>
        <div className="introText">
          <p className="fullName">SEVAL CAKIR</p>
          <p >On a journey to be a full stack developer...</p>
          <p>
            I am currently based in Seattle and attending University of Washington Coding Bootcamp. I am looking forward to creating beautiful products and solving problems...
          </p>
        </div>
      </div>
      <div className="col right"></div>
    </div>
  );
}

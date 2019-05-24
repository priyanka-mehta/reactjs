import React, { Component } from 'react';
import '../App';


const subHeading = {
  padding: "20px",
  color: "gray",
  margin: "20px",
  "textAlign": "center",
  "fonSize": "30px",

};

class Home extends Component {

  person(type, num) {
    return (
      <div id="col-25">
        <h2>{type}:{num}</h2>
      </div>
    )
  }
  render() {
    return (
      <div>
        <div id="main">
          <h1 className="heading">DNV INTERNATIONAL EDUCATION ACADEMY </h1>
          <div style={subHeading}>Future of Education Technology</div>
          <h3 id="courses">BBA. BCA. MCA </h3>
        </div>

        <div>
          <div className="oneline">{this.person("Student", "100")}</div>
          <div className="oneline">{this.person("Faculty", "12")}</div>
          <div className="oneline">{this.person("Classrooms", "8")}</div>
        </div>
      </div>
    );
  }
}

export default Home;

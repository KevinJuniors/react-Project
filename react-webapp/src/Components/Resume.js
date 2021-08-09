import React, { Component } from "react";
import MapContainer from "./maps/MapContainer";
class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const MapContents = this.props.data.education.map(function(MapContents) {
      return (
        <MapContainer />
      );
    });

    const skills = this.props.data.skills.map(skills => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Maps</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div>{MapContents}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
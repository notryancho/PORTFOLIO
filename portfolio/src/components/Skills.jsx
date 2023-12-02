import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import TailWind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import PostgreSQL from "../assets/postgresql";

const Skills = () => {
  return (
    <div name="skills">
      {/* Container */}
      <div>
        <div>
          <p>Experience</p>
          <p>// These are the technologies I've worked with</p>
        </div>

          <div>
            <div>
              <img src={HTML} alt="HTML icon" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;

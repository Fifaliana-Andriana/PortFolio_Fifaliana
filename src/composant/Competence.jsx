import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { FaJs } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { FaMdb } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa6";
import { FaLaravel } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa6";

function Competence() {
  return (
    <div id="Competence" className="w100prc bgBlue">
      <h2>Compétences Techniques</h2>
      <div className="skills displayF flexDirC">
        <div className="displayF justifyCSE mBottom">
          <div className="skill-card displayF justifyCSE alignIC w5cm">
            <FaHtml5 />
            HTML
          </div>
          <div className="skill-card displayF justifyCSE alignIC w5cm">
            <FaCss3 />
            CSS
          </div>
          <div className="skill-card displayF justifyCSE alignIC w5cm">
            <FaJs />
            JavaScript
          </div>
          <div className="skill-card displayF justifyCSE alignIC w5cm">
            <FaReact />
            React
          </div>
        </div>
        <div className="displayF justifyCSE mBottom">
          <div className="skill-card displayF justifyCSE alignIC w5cm">
            <FaPhp />
            PHP 8+
          </div>
          <div className="skill-card displayF justifyCSE alignIC w5cm">
            <FaLaravel />
            Laravel
          </div>
          <div className="skill-card displayF justifyCSE alignIC w5cm">
            <FaMdb />
            MySQL
          </div>

          <div className="skill-card displayF justifyCSE alignIC w5cm">Tailwind CSS</div>
        </div>
        <div className="displayF justifyCSE mBottom">
          <div className="skill-card displayF justifyCSE alignIC w5cm">
            <FaBootstrap />
            Bootstrap
          </div>
          <div className="skill-card displayF justifyCSE alignIC w5cm">
            <FaGithub />
            Git & GitHub
          </div>
          <div className="skill-card displayF justifyCSE alignIC w5cm">
            <FaLinux />
            Linux Server
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competence;

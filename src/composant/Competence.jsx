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
import { FaCode } from "react-icons/fa6";
// import { SiVisualstudiocode } from "react-icons/si";

function Competence() {
  return (
    <div id="Competence" className="w100prc container">
      <h2>Compétences Techniques</h2>
      <div className="containerFirst">
        <div className="containerSecond">
          <div className="containerThird">
            <p className="h15cm">Développement Front-end</p>
            <div className="skill-card displayF justifyCC alignIC w5cm">
              <i>
                <FaHtml5 />
              </i>
              <p>HTML</p>
            </div>
            <div className="skill-card displayF justifyCC alignIC w5cm">
              <i>
                <FaCss3 />
              </i>
              <p>CSS</p>
            </div>
            <div className="skill-card displayF justifyCSE alignIC w5cm">
              <i>
                <FaJs />
              </i>
              <p>JavaScript</p>
            </div>
            <div className="skill-card displayF justifyCSE alignIC w5cm">
              <i>
                <FaReact />
              </i>
              <p>React</p>
            </div>
            <div className="skill-card displayF justifyCSE alignIC w5cm">
              <i>TW</i>
              <p>Tailwind CSS</p>
            </div>
            <div className="skill-card displayF justifyCSE alignIC w5cm">
              <i>
                <FaBootstrap />
              </i>
              <p>Bootstrap</p>
            </div>
          </div>
          <div className="containerThird">
            <p className="h15cm">Développement Back-end</p>
            <div className="skill-card displayF justifyCSE alignIC w5cm">
              <i>
                <FaPhp />
              </i>
              <p>PHP 8+</p>
            </div>
            <div className="skill-card displayF justifyCSE alignIC w5cm">
              <i>
                <FaLaravel />
              </i>
              <p>Laravel</p>
            </div>
          </div>
        </div>
        <div className="containerSecond">
          <div className="containerThird">
            <p className="h15cm">Bases de données</p>
            <div className="skill-card displayF justifyCSE alignIC w5cm">
              <i>
                <FaMdb />
              </i>
              <p>MySQL</p>
            </div>
          </div>
          <div className="containerThird">
            <p className="h15cm">Outils & Environnement</p>
            <div className="skill-card displayF justifyCSE alignIC w5cm">
              <i>
                <FaGithub />
              </i>
              <p>Git & GitHub</p>
            </div>
            <div className="skill-card displayF justifyCSE alignIC w5cm">
              {/* <SiVisualstudiocode/> */}
              <i>
                <FaCode />
              </i>
              <p>Visual Studio Code</p>
            </div>
            <div className="skill-card displayF justifyCSE alignIC w5cm">
              <i>
                <FaLinux />
              </i>
              <p>Linux Server</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competence;

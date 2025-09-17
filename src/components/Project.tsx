import React from "react";
import heat01 from '../assets/images/heat01.png';
import mock08 from '../assets/images/mock08.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
        <div className="projects-container" id="projects">
            <h1>Personal & Academic Projects</h1>
            <div className="projects-grid">

                {/* Heat Recovery Project */}
                <div className="project">
                    <img src={heat01} alt="Heat Optimization" className="zoom" width="100%" />
                    <h2>Optimization of Heat Recovery</h2>
                    <p>
                        Engineered a dual-circuit CPU cooling and heat recovery system, achieving 81% efficiency through simulations 
                        and calorimetry experiments. Analyzed thermal flows, proposed scalable data center energy solutions, 
                        and combined hands-on testing with modeling to validate performance. Demonstrates both practical engineering 
                        skills and optimization expertise.
                    </p>
                </div>

                {/* Food & Symptoms Tracker */}
                <div className="project">
                    <img src={heat01} alt="Food & Symptoms Tracker" className="zoom" width="100%" />
                    <h2>Food & Symptoms Tracker (Ongoing)</h2>
                    <p>
                        Designing a personal health tracker to log meals and symptoms, analyze correlations, and help users identify triggers.
                        The project will use a modern tech stack (React, Node.js, MongoDB) to create an intuitive interface for data input and visualization.
                    </p>
                </div>

                {/* VR Game */}
                <div className="project">
                    <img src={mock08} alt="VR Educational Game" className="zoom" width="100%" />
                    <h2>VR Educational Game</h2>
                    <p>
                        Coordinated a 4-person team to develop a real-time 3D educational game for medical training.
                        Delivered a fully functioning prototype used in academic demonstrations, integrating Unity, C#, and 3D modeling tools.
                    </p>
                </div>

                {/* Var CCI Research Project */}
                <div className="project">
                    <img src={heat01} alt="Var CCI Research" className="zoom" width="100%" />
                    <h2>Var CCI – Student Researcher</h2>
                    <p>
                        Conducted a research project commissioned by the Var Chamber of Commerce and Industry on the Brégaillon freight port.
                        Designed a hydrogen recharging station and studied the feasibility of green refueling services for future engines.
                        Presented findings at Business Maritim Days to leaders of freight and railway companies.
                    </p>
                </div>

                {/* Architecture Summer Course */}
                <div className="project">
                    <img src={heat01} alt="Architecture Summer Course" className="zoom" width="100%" />
                    <h2>Architecture Summer Course</h2>
                    <p>
                        Focused on urban design, completing a project under the High Line integrating sustainability and modern principles.
                        Explored design strategies that balance environmental, social, and functional requirements for urban spaces.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;

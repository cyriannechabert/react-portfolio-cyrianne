import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience & Education</h1>
        <VerticalTimeline layout="2-columns">

          {/* Columbia MS - Left */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2025 – May 2026"
            position="left"
            iconStyle={{ background: '#00aaff', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">MS in Mechanical Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Columbia University, NY</h4>
            <p>Coursework: Robotics, Robotics Studio, Data Science for Mechanical Systems, Biostatistics.</p>
          </VerticalTimelineElement>

          {/* NYGC Researcher - Right */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2025 – Present"
            position="right"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Biomedical Informatics Researcher</h3>
            <h4 className="vertical-timeline-element-subtitle">New York Genome Center, NY</h4>
            <p>Investigated federated learning on biomedical data by analyzing hyperparameters to enhance model performance.</p>
          </VerticalTimelineElement>

          {/* Seoul N.U. Exchange - Left */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="february 2025 – june 2025"
            position="left"
            iconStyle={{ background: '#00aaff', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Exchange Student</h3>
            <h4 className="vertical-timeline-element-subtitle">Seoul National University (SNU), Seoul, KR</h4>
            <p>Coursework: Machine Learning in Bioinformatics, Energy Systems.</p>
          </VerticalTimelineElement>

          {/*Mines ParisTech - Left */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 – april 2027"
            position="left"
            iconStyle={{ background: '#00aaff', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">MEng in Applied Mathematics and Applied Physics</h3>
            <h4 className="vertical-timeline-element-subtitle">Mines ParisTech – PSL University, Paris, FR</h4>
            <p>GPA: 3.75/4.00<p>
            </p>Coursework: Optimization, Data Science, Probability, Continuum Mechanics, Quantum Physics.</p>
          </VerticalTimelineElement>

          {/* CBIO Intern - Right */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2025 – Jun 2025"
            position="right"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bioinformatics Research Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">CBIO, Mines ParisTech, Paris, FR</h4>
            <p>Rebuilt the RSApred pipeline, tested RNA redundancy, and designed RNA–ligand swapping experiments.</p>
          </VerticalTimelineElement>

          {/* Biomechanics Intern - Right */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2024 – Feb 2025"
            position="right"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Biomechanics Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Movement Analysis Laboratory, Hospital des Massues, Lyon, FR</h4>
            <p>Processed gait datasets in Python, operated rehabilitation machines, and enhanced walking performance using UNITY, BLENDER, and C#.</p>
          </VerticalTimelineElement>

          {/* College Stanislas Prep - Left */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021 – 2023"
            position="left"
            iconStyle={{ background: '#00aaff', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Preparatory School PCSI/PSI*</h3>
            <h4 className="vertical-timeline-element-subtitle">College Stanislas, Paris, FR</h4>
            <p>GPA: 3.98/4.00<p>
            </p>Major in Physics and Mathematics; Minor in Computer Science and Engineering Sciences.</p>
          </VerticalTimelineElement>

          {/* Heat Recovery Project - Right */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2022 – Jul 2023"
            position="right"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Optimization of Heat Recovery</h3>
            <h4 className="vertical-timeline-element-subtitle">College Stanislas</h4>
            <p>Engineered a dual-circuit CPU cooling and heat recovery system, achieving 81% efficiency through simulations and experiments.</p>
          </VerticalTimelineElement>


        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;




/*import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Technology Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>
            <p>
              Full-stack Web Development, GenAI/LLM, Project Management, Business Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Frontend Development, Backend Development, User Experience, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Staff Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Full-stack Development, API Development, User Experience
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
*/
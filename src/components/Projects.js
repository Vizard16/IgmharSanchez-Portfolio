import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ProjectDetailsModal from "./ProjectDetailsModal";
import projImg1 from "../assets/img/projects/CIber_ROS.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();
  const [modalShow, setModalShow] = useState(false);

  const handleShow = (project) => {
    setSelectedProjectDetails(project);
    setModalShow(true);
  };

  const handleClose = () => setModalShow(false);

  const projects = [
    {
      title: "Mobile Robot Navigation",
      description: "Robotics",
      imgUrl: projImg1,
      thumbImage: projImg1,
      sliderImages: [projImg2, projImg3],
      projectInfo: ["Description about the project"],
      client: "Client Name",
      technologies: "React, Bootstrap",
      industry: "Robotics",
      date: "2024",
      urls: [
        { icon: "fab fa-github", name: "GitHub", link: "https://github.com" }
      ],
    },
    // Add other projects here
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Holaa</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Mechatronics</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Robotics</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Software</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleShow(project)}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Content for Robotics</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Content for Software</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
      <ProjectDetailsModal
        show={modalShow}
        handleClose={handleClose}
        darkTheme={false} // or true based on your theme
        projectDetails={selectedProjectDetails}
      />
    </section>
  )
}

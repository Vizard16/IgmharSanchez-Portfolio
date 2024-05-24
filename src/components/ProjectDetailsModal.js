import React, { useEffect, useRef } from "react";
import { Modal, Button } from "react-bootstrap";
import Slider from "react-slick";
import "./ProjectDetailsModal.css"; // Import your CSS file
import mainImage from "../../src/assets/img/projects/CIBERFISICOSROS.png";

const ProjectDetailsModal = ({ darkTheme, projectDetails, show, handleClose }) => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  useEffect(() => {
    sliderRef.current?.slickGoTo(0);
  }, [projectDetails]);

  return (
    <Modal show={show} onHide={handleClose} size="xl" centered>
      <Modal.Header closeButton className={darkTheme ? "bg-dark-1 text-light" : ""}>
        <Modal.Title>{projectDetails?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={darkTheme ? "bg-dark-1 text-light" : ""}>
        <div className="container ajax-container">
          
          <div className="row g-4">
            <div className="col-md-10 mx-auto">
              <Slider {...settings} ref={sliderRef}>
                {projectDetails?.thumbImage && (
                  <div className="item">
                    <img className="img-fluid mx-auto" alt="" src={mainImage} />
                  </div>
                )}
                {projectDetails?.sliderImages?.length > 0 &&
                  projectDetails.sliderImages.map((image, index) => (
                    <div className="item" key={index}>
                      <img className="img-fluid mx-auto" alt="" src={image} />
                    </div>
                  ))}
              </Slider>
            </div>
            <div className="col-md-12">
              <h4>Project Info:</h4>
              {projectDetails?.projectInfo?.length > 0 &&
                projectDetails.projectInfo.map((bullet, index) => (
                  <p key={index}>{bullet}</p>
                ))}
              <h4 className="mt-4">Project Details:</h4>
              <ul className="list-unstyled">
                <li>
                  <strong>Collaboration with:</strong> {projectDetails?.client}
                </li>
                <li>
                  <strong>Technologies:</strong> {projectDetails?.technologies}
                </li>
                <li>
                  <strong>Industry:</strong> {projectDetails?.industry}
                </li>
                <li>
                  <strong>Duration:</strong> {projectDetails?.date}
                </li>
              </ul>
              <h4 className="mt-4">Additional resources:</h4>
              <ul className="list-unstyled">
                {projectDetails?.urls?.length > 0 &&
                  projectDetails.urls.map((url, index) => (
                    <li key={index}>
                      <i className={url.icon} />{" "}
                      <a href={url.link} target="_blank" rel="noopener noreferrer">
                        {url.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className={darkTheme ? "bg-dark-1" : ""}>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectDetailsModal;


import "../../App.css";

export default function TechIcon(props) {
    return (
      <a href={props.link} target="_blank" rel="noopener noreferrer" className="d-block text-decoration-none">
        <div className="position-relative">
          <div className="tech-icon-overlay d-flex justify-content-center align-items-center">
            <span className="tech-icon-text text-white">
              {props.name}
            </span>
          </div>
          <img
            alt={props.name}
            className={`img-fluid ${props.padding}`}
            src={props.src}
          />
        </div>
      </a>
    );
  }
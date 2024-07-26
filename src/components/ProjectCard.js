import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={10} md={11}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <div className="description">
            <span>{description}</span>
          </div>
          <button>
            <span>View Project</span>
          </button>
        </div>
      </div>
    </Col>
  );
};

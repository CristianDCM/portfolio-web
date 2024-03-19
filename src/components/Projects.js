import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import "animate.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrackVisibility from "react-on-screen";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Projects = () => {
  const projects = [
    {
      title: "Tittle1",
      description: "Description",
      imgUrl: projImg1,
    },
    {
      title: "Tittle2",
      description: "Description",
      imgUrl: projImg2,
    },
    {
      title: "Tittle3",
      description: "Description",
      imgUrl: projImg3,
    },
    {
      title: "Tittle4",
      description: "Description",
      imgUrl: projImg1,
    },
    {
      title: "Tittle5",
      description: "Description",
      imgUrl: projImg2,
    },
    {
      title: "Tittle6",
      description: "Description",
      imgUrl: projImg3,
    },
  ];

  const aos = ["fade-down", "fade-left", "fade-right"];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 data-aos="fade-down">Projects</h2>
                  <Tab.Container
                    id="projects-tabs"
                    defaultActiveKey="first"
                    className="project-tabs"
                  >
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      autoPlay={true}
                      autoPlaySpeed={3000}
                      className="owl-carousel owl-theme skill-slider"
                    >
                      {projects.map((project, index) => {
                        return (
                          <div className="item-tab" key={index} data-aos={aos[index % 3]}>
                            <ProjectCard key={index} {...project} />
                          </div>
                        );
                      })}
                    </Carousel>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
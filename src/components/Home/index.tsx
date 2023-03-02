import { Link } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import "./datas";
import datas from "./datas";

function Home() {
  return (
    <div className="home-body">
      <div className="home-container">
        <h2>Harris's portfolio</h2>
        {datas.map((data, index) => {
          return (
            <Card key={index}>
              <Card.Img variant="top" src={data.img} />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>{data.text}</Card.Text>
                {data.url && (
                  <a href={data.url} className="home-link" target="_blank">
                    More Detail <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                )}
                {data.path && (
                  <Link to={data.path} className="home-link">
                    <>
                      More Detail <FontAwesomeIcon icon={faArrowRight} />
                    </>
                  </Link>
                )}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Home;

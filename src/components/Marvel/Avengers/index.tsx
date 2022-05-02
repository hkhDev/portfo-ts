import { useState } from "react";
import { Carousel } from "react-bootstrap";
import avengersList from "./avengersList";
import "./index.scss";

function Avengers() {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="avengers">
      <h2>Avengers</h2>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {avengersList.map((avenger) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={avenger.img}
              alt={avenger.imgName}
            />
            <Carousel.Caption>
              <h3>{avenger.content}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
    // <div id="avengers">
    //   <div
    //     id="carouselExampleIndicators"
    //     className="carousel slide"
    //     data-bs-ride="carousel"
    //   >
    //     <div className="carousel-indicators">
    //       {buttons.map((button) => (
    //         <button
    //           type="button"
    //           data-bs-target="#carouselExampleIndicators"
    //           data-bs-slide-to={button.dataBsSlideTo}
    //           className={button.className}
    //           aria-current={button.ariaCurrent}
    //           aria-label={button.ariaLabel}
    //         ></button>
    //       ))}
    //     </div>
    //     <div className="container-fluid">
    //       <div className="carousel-inner">
    //         {avengersList.map((avenger) => (
    //           <Item
    //             className={avenger.className}
    //             content={avenger.content}
    //             img={avenger.img}
    //             imgName={avenger.imgName}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //     <button
    //       className="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide="prev"
    //     >
    //       <span
    //         className="carousel-control-prev-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       className="carousel-control-next"
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide="next"
    //     >
    //       <span
    //         className="carousel-control-next-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Next</span>
    //     </button>
    //   </div>
    // </div>
  );
}

export default Avengers;

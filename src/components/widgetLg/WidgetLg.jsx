import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./WidgetLg.css";
import { Card } from "react-bootstrap";
// import {cardImg} from "../../assets/cardImg.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

export default function WidgetLg({ filteredData }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: filteredData.length > 2 ? 3 : filteredData.lenght > 1 ? 2 : 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="widgetLg">
      <Slider {...settings} style={{ marginRight: "20px", width: "98%" }}>
        {filteredData.length !== 0 ? (
          filteredData.map((curr, index) => {
            return (
              <Card className="card" key={index}>
                <Card.Img
                  style={{ width: "70%" }}
                  variant="top"
                  className="image-card"
                  src={curr.news_image}
                />
                <Card.Body style={{ overflowY: "auto", width: "70%" }}>
                  <Card.Text>{curr.news_headline}</Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            );
          })
        ) : (
          <h1>No Data Available</h1>
        )}
      </Slider>
    </div>
  );
}

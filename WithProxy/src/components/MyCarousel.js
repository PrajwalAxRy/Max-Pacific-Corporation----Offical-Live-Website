import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item"; // Assuming Item is a component you've created
import "./styles.css"; // Import any necessary styles

const MyCarousel = ({ items }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <Carousel breakPoints={breakPoints}>
      {items.map((itemContent, index) => (
        <Item key={index}>{itemContent}</Item>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://aci.dp.ua/images/pages/mariupol.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 id='First_slide_h3'> </h3>
          <p id='First_slide_p'> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://cdn5.vedomosti.ru/image/2022/4e/w91g/original-15s.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 id='Second_slide_h3'> </h3>
          <p id='Second_slide_h3'></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="https://pbs.twimg.com/media/FU7OV-IXsAESiZk?format=jpg&name=large"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 id='Third_slide_h3'> </h3>
          <p id='Third_slide_h3'> 
             
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

 

export default ControlledCarousel;
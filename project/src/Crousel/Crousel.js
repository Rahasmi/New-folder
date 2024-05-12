import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import image from './CrouselImage/1.jpeg';
import image2 from './CrouselImage/2.jpeg';
import image3 from './CrouselImage/3.jpeg';

const CustomCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Welcome to CodeXpanse</h3>
                    <p>Technology News, Developments & Trends</p>
                    <button type="button" className="btn btn-danger">Technology</button>
                    <button type="button" className="btn btn-primary">Web Development</button>
                    <button type="button" className="btn btn-success">Fun Tech</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>The best coder Blog</h3>
                    <p>Stay updated with the latest technology trends.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Award-winning Blog</h3>
                    <p>Discover the most innovative projects and ideas.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CustomCarousel;

import React from 'react';
import image from './image/about2.jpeg';

const Featurette2 = () => {
    return (
        <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal lh-1">we started CodeXpanse in 1998. <span className="text-body-secondary">Pioneering Coding Education Since 1998</span></h2>
                <p className="lead">Back in 1998, we recognized the immense potential of coding and the transformative impact it could have on individuals and society as a whole. With a passion for empowering learners to harness the power of programming, we founded CodeXpanse. Over the years, we have evolved and adapted to the ever-changing landscape of technology and education, remaining committed to our mission of providing top-notch coding education to aspiring developers of all backgrounds.</p>
            </div>
            <div className="col-md-5 order-md-1">
                <img className="img-fluid" src={image}alt="" />
            </div>
        </div>
    );
}

export default Featurette2;

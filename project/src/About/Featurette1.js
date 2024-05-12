import React from 'react';
import image from './image/about1.jpeg';

const Featurette1 = () => {
    return (
        <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">It all started with CodeXpanse idea. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
                <p className="lead">At CodeXpance, we believe that coding is not just a skill; it's an art form that empowers you to create and innovate. Our platform is designed to provide you with an unparalleled learning experience that is both engaging and effective. Whether you are a beginner with no coding experience or an experienced developer seeking to level up your skills, CodeXpance has something unique to offer..</p>
            </div>
            <div className="col-md-5">
                <img className="img-fluid" src={image} alt="" />
            </div>
        </div>
    );
}

export default Featurette1;

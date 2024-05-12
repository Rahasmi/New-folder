import React from 'react';

function AboutSection({ heading, subheading, description, image }) {
    return (
        <div className="container my-4">
            <div className="row featurette d-flex justify-content-center align-items-center">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">{heading} <span className="text-body-secondary">{subheading}</span></h2>
                    <p className="lead">{description}</p>
                </div>
                <div className="col-md-5">
                    <img className="img-fluid" src={image} alt="" />
                </div>
            </div>
        </div>
    );
}

export default AboutSection;

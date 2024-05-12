import React from 'react';
import image from './image/about4.jpeg';

const Featurette3 = () => {
    return (
        <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1">Guided Learning Paths <span className="text-body-secondary">It will blow your mind.</span></h2>
                <p className="lead">At CodeXpanse, we understand that starting your coding journey can be overwhelming with the abundance of programming languages, frameworks, and technologies to choose from. That's why we have carefully crafted Guided Learning Paths to streamline your learning experience and set you on the path to success!.</p>
            </div>
            <div className="col-md-5">
                <img className="img-fluid" src={image} alt="" />
            </div>
        </div>
    );
}

export default Featurette3;

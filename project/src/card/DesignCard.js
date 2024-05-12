import React from "react";
import image from './Image/web.jpg';

const DesignCard = () => {
    return (
        <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success-emphasis">Design</strong>
                    <h3 className="mb-0">Learn Web Design</h3>
                    <div className="mb-1 text-body-secondary">Nov 11</div>
                    <p className="mb-auto">Web designing is the process of planning, conceptualizing, and
                        implementing the plan for designing a website in a way that is functional and offers a
                        good user experience. User experience is central to the web designing process.</p>
                    <a href="https://www.tutorialspoint.com/internet_technologies/website_designing.htm" className="icon-link gap-1 icon-link-hover stretched-link">
                        Continue reading
                        <svg className="bi">
                            <use xlinkHref="#chevron-right"></use>
                        </svg>
                    </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img className="bd-placeholder-img" width="200" height="250" src={image} alt="" />
                </div>
            </div>
        </div>
    );
}

export default DesignCard;
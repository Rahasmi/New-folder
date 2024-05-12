import React from 'react';
import image from './Image/c++.jpg';

const CppCard = () => {
    return (
        <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success-emphasis">C++</strong>
                    <h3 className="mb-0">Learn C++</h3>
                    <div className="mb-1 text-body-secondary">Nov 11</div>
                    <p className="mb-auto">C++ is a cross-platform language that can be used to create high-performance applications. C++ was developed by Bjarne Stroustrup, as an extension to the C language. C++ gives programmers a high level of control over system resources and memory.</p>
                    <a href="https://www.w3schools.com/cpp/" className="icon-link gap-1 icon-link-hover stretched-link">
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

export default CppCard;

import React from 'react';
import image from './Image/csharp.png';

const CsharpCard = () => {
    return (
        <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis">C#</strong>
                    <h3 className="mb-0">C#</h3>
                    <div className="mb-1 text-body-secondary">Nov 12</div>
                    <p className="card-text mb-auto">C# is a versatile programming language developed by Microsoft, valued for its simplicity and flexibility. It's extensively used for desktop, web, and mobile development, ensuring efficiency and reliability in projects.</p>
                    <a href="https://www.w3schools.com/cs/index.php" className="icon-link gap-1 icon-link-hover stretched-link">
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


export default CsharpCard;
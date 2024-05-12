import React from 'react';
import image1 from './Image/b.webp'

const BootstrapCard = () => {
    return (
        <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary-emphasis">Bootstrap</strong>
                    <h3 className="mb-0">Bootstrap Template</h3>
                    <div className="mb-1 text-body-secondary">Nov 12</div>
                    <p className="card-text mb-auto">Bootstrap templates are pre-designed website or software frameworks or base layouts that leave minimal space for custom styling. With templates, minimal custom CSS is mainly used for layout purposes, and few styling or design decisions are made</p>
                    <a href="https://getbootstrap.com/" className="icon-link gap-1 icon-link-hover stretched-link">
                        Continue reading
                        <svg className="bi">
                            <use xlinkHref="#chevron-right"></use>
                        </svg>
                    </a>
                </div>
                <div className="col-auto d-none d-lg-block">
                    <img className="bd-placeholder-img" width="200" height="250" src={image1} alt="" />
                </div>
            </div>
        </div>
    );
}

export default BootstrapCard;

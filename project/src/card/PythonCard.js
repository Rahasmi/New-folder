import React from 'react';
import image from './Image/python.png';

const PythonCard = () => {
    return (
        <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success-emphasis">Python</strong>
                    <h3 className="mb-0">Learn Learn Python</h3>
                    <div className="mb-1 text-body-secondary">Nov 11</div>
                    <p className="mb-auto">Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems.</p>
                    <a href="https://docs.python.org/3/tutorial/index.html" className="icon-link gap-1 icon-link-hover stretched-link">
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

export default PythonCard;

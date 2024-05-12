// Topics.js
import React from 'react';

const Topics = () => {
  return (
    <div className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Topics
      </a>
      <ul className="dropdown-menu">
        <li>
          <a className="dropdown-item" href="https://www.simplilearn.com/top-technology-trends-and-jobs-article">
            Technology
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="https://www.w3schools.com/whatis/">
            Web Development
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Support
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Write For Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Topics;

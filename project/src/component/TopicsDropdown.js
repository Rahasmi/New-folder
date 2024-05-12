import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const TopicsDropdown = () => {
  return (
    <NavDropdown title="Topics" id="basic-nav-dropdown">
      <NavDropdown.Item href="https://www.simplilearn.com/top-technology-trends-and-jobs-article">Technology</NavDropdown.Item>
      <NavDropdown.Item href="https://www.w3schools.com/whatis/">Web Development</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#">Support</NavDropdown.Item>
      <NavDropdown.Item href="/write.html">Write For Us</NavDropdown.Item>
    </NavDropdown>
  );
};

export default TopicsDropdown;

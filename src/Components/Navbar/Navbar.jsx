import {Text} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { Icon } from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon} from "@chakra-ui/icons";
import "./Navbar.css";
const Navbar = () => {
  const [isHamburger, setIsHamburger] = useState(false);

  return (
    <div className='nav-menu'>
      <Text fontSize={32} ml="5">
        Gaurav<span style={{ color: "goldenrod", fontSize: "2rem" }}>Kumar</span>
      </Text>
      <ul
        className={isHamburger ? "hamburger" : "nav-links"}
        onClick={() => {
          setIsHamburger(false);
        }}
      >
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className="Home"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="AboutMe"
        >
          About
        </Link>
        <Link
          className="Skills"
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Skills
        </Link>
        <Link
          className="Projects"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Projects
        </Link>
        <Link
          className="Contact"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Contact
        </Link>
        
        <a
          className="Resume"
          href="https://drive.google.com/file/d/1bCimhsKdM7poUTi3EVd7JtHm5MTXo7Gu/view?usp=sharing"
          target='_blank'
        >
          <li
          >
            Resume
          </li>
        </a>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsHamburger(!isHamburger)}
      >
        {isHamburger ? <Icon fontSize='16px' as={CloseIcon} /> : <Icon as={HamburgerIcon} />}
      </button>
    </div>
  );
};

export default Navbar;

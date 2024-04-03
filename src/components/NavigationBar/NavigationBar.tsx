"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" className="sticky-top">
        <Container className="mx-auto">
          <Navbar.Brand>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-800 font-semibold text-lg"
            >
              ThePortFolio
            </Link>
          </Navbar.Brand>
          <Nav className="flex flex-wrap justify-center">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link cursor-pointer"
            >
              About Me
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link cursor-pointer"
            >
              My Services
            </Link>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link cursor-pointer"
            >
              Resume
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              duration={500}
              className="nav-link cursor-pointer"
            >
              Testimonials
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;

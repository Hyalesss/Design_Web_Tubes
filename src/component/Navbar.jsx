import { useState, useEffect } from "react"
import Footer from "./Footer";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink, Link } from "react-router-dom";

const NavbarComponent = () => {

    const [changecolor, setchangecolor] = useState(false);

    const changebackgroundcolor = () => {
        if (window.scrollY > 10) {
            setchangecolor(true);
        } else {
            setchangecolor(false);
        }
    }

    useEffect(() => {
        changebackgroundcolor();

        window.addEventListener("scroll", changebackgroundcolor);
    })

    const handleScrollToFooter = () => {
        const footer = document.getElementById("footer");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }
      };

    return (
        <div>
            <Navbar expand="lg" className={changecolor ? "color-active" : ""}>
                <Container>
                    <div className="d-flex align-items-center">
                        <img src="./gotnews.png" className="pe-2" alt="GOT NEWS Logo" />
                        <Navbar.Brand href="">GOT NEWS</Navbar.Brand>
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto text-center">
                            {navLinks.map((link) => (
                                <div className="nav-link" key={link.id}>
                                    <NavLink to={link.path} className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    } end >{link.text}</NavLink>
                                </div>
                            ))}
                        </Nav>
                        <div className="text-center">
                                <button className="btn btn-outline-secondary rounded-1"
                                onClick={handleScrollToFooter}>
                                    Kontak Kami
                                </button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer py-5">
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col lg="5"> 
                        <div className="logos">
                            <div className="text-logos">
                                <img src="./gotnews.png" className="pe-2" alt="GOT NEWS Logo" />
                                <h5 className="textlogos">GOT NEWS</h5>
                            </div>
                            <p className="desc">Got News membantu anda untuk melihat informasi yang sedemikian rupa dengan kategori yang ada </p>
                        </div>
                        <div className="no mb-1 mt-4">
                            <Link className="text-decoration-none">
                                <i className="fa-brands fa-whatsapp"></i>
                                <p className="m-0">+62 8950 1192 321</p>
                            </Link>
                        </div>
                        <div className="mail">
                            <Link className="text-decoration-none">
                                <i className="fa-regular fa-envelope"></i>
                                <p className="m-0">Alessandrobenaya5@gmail.com</p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
                        <h5 className="fw-bold">Menu</h5>
                        <Link to="">Beranda</Link>
                        <Link to="Berita">Berita</Link>
                        <Link to="videoberita">Video Berita</Link>
                        <Link to="FAQ">FAQ</Link>
                    </Col>
                    <Col lg="4" className="mt-lg-0 mt-5">
                        <h5 className="fw-bold mb-3">Subscribe untuk info menarik</h5>
                        <div className="subscribe">
                            <input type="text" placeholder="Subscribe..." />
                            <button className="btn btn-primary rounded-2">Subscribe</button>
                        </div>
                        <div className="social mt-3 ">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="tekscopyright text-center fw-bold px-md-0 px-3">&copy; Copyright {new Date().getFullYear} by GOT NEWS Portal Berita</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer